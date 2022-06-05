const { v4: uuid } = require("uuid");
const Report = require("../models/Report");
const createReport = async (req, res) => {
  const mID = req.body.marketID;
  const mName = req.body.marketName;
  const mType = req.body.marketType;
  const cID = req.body.cmdtyID;
  const cName = req.body.cmdtyName;
  const userId = req.body.userID;
  const priceUnit = req.body.priceUnit;
  const convertFactor = req.body.convFctr;
  const price = req.body.price;
  // Convert the price for baseUnit kg
  const basePrice = price / convertFactor;
  let userArray = [];
  let priceArray = [];
  if (!mID || !mName || !mType)
    return res.status(400).json({ message: "Market Attribute Missing" });
  if (!cID || !cName)
    return res.status(400).json({ message: "Commodity Attribute Missing" });
  if (!priceUnit || !convertFactor || !price)
    return res.status(400).json({ message: "Price Attribute Missing" });
  if (!userId) return res.status(400).json({ message: "userID is required" });
  try {
    // find report exist with same cmdtyId, marketId or not
    const existingReport = await Report.findOne({
      commodityID: req.body.cmdtyID,
      marketID: req.body.marketID,
    }).exec();
    if (existingReport) {
      // if report exists
      //   update the report with new user and price
      // Append new user to userArray
      // Append price associated to current user in priceArray in Base form (kg)
      userArray = [...existingReport.users, userId];
      priceArray = [...existingReport.prices, basePrice];
      let avgPrice = 0;
      let sum = 0;
      priceArray.forEach(price => {
        sum += price;
      });
      avgPrice = sum/priceArray.length;
      avgPrice = avgPrice.toFixed(2);
      const reportId = existingReport.reportID;
      try {
        await Report.updateOne(
          { reportID: reportId },
          {
            users: userArray,
            prices: priceArray,
            averagePrice: avgPrice,
          }
        );
        return res.status(200).json({ status: "success", reportId: reportId });
      } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    } else {
      //   create new report
      const reportId = uuid();
      userArray = [userId];
      priceArray = [basePrice];
      try {
        await Report.create({
          reportID: reportId,
          users: userArray,
          prices: priceArray,
          marketID: mID,
          marketName: mName,
          marketType: mType,
          commodityID: cID,
          commodityName: cName,
          averagePrice: basePrice,
        });
        return res.status(201).json({ status: "success", reportId: reportId });
      } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = createReport;
