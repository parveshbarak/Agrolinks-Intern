const mongoose = require('mongoose')

const reportSchema = mongoose.Schema(
  {
    userID: {
      type: [],
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
    cmdtyID: {
      type: String,
      required: true,
    },
    cmdtyName: {
      type: String,
      required: true,
    },
    priceUnit: {
      type: String,
      required: true,
    },
    convFctr: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)


module.exports = mongoose.model('Report', reportSchema)