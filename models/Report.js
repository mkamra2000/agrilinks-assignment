const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  reportID: {
    type: String,
    required: true,
  },
  users: {
    type: [String],
    required: true,
  },
  prices: {
    type: [Number],
    required: true,
  },
  marketID: {
    type: String,
    required: true,
  },
  marketName: {
    type: String,
    required: true,
  },
  marketType: {
    type: String,
    required: true,
  },
  commodityID: {
    type: String,
    required: true,
  },
  commodityName: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
  averagePrice: {
    type: Number,
    required: true,
  },
  priceUnit: {
    type: String,
    default: "kg",
  },
});

module.exports = mongoose.model("Report", reportSchema);
