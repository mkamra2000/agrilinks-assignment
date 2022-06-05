const Report = require("../models/Report");
const getReport = async (req, res) => {
  // Get report Id from request
  const reportId = req.query.reportID;
  try {
    // find for reportId
    const report = await Report.findOne({ reportID: reportId });
    if (!report)
      return res
        .status(404)
        .json({ message: `Report associated with id:${reportId} not found.` });
    return res.json({
      _id: reportId,
      cmdtyname: report.commodityName,
      cmdtyID: report.commodityID,
      marketID: report.marketID,
      marketName: report.marketName,
      users: report.users,
      timestamp: report.timestamp,
      priceUnit: report.priceUnit,
      price: report.averagePrice,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getReport;
