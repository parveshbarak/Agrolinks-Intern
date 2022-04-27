const Report = require('../models/reportModel')

const reportServices = {
  addReport: async function (reportdata) {
    let data
    try {
      const newReport = await Report(reportdata)
      data = newReport.save()
    } catch (error) {
      console.log(error.message)
    }
    return data
  },
  data: async function (marketID, cmdtyID) {
    let data
    try {
      data = await Report.find({ marketID: marketID, cmdtyID: cmdtyID })
    } catch (e) {
      console.log(e.message)
    }
    return data
  },
  update: async function (newPrice, newConvFctr, newUser, marketID, cmdtyID) {
    try {
      const reportData = await Report.find({
        marketID: marketID,
        cmdtyID: cmdtyID,
      })
      if (reportData.length > 0) {
        const data = reportData[0]
        let { price, convFctr, userID } = data
        const len = userID.length
        let p1 = (price / convFctr) * len
        p1 = (p1 + newPrice / newConvFctr) / (len + 1)
        const updatedValues = await Report.findOneAndUpdate(
          { marketID: marketID, cmdtyID: cmdtyID },
          {
            $set: {
              price: p1,
              convFctr: 1,
              priceUnit: 'kg',
            },
            $push: {
              userID: newUser,
            },
          }
        )
        return updatedValues
      } else {
        console.log('No data!')
      }
    } catch (e) {
      console.log(e.message)
    }
  },
  report: async function (reportID) {
    const data = await Report.find({ _id: reportID }).select("-convFctr")
    return data
  },
}

module.exports = reportServices
