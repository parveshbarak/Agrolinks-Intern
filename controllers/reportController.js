const reportServices = require('../services/reportServices')

const reportController = {
  createReport: async function (req, res) {
    try {
      const existingReport = await reportServices.data(
        req.body.marketID,
        req.body.cmdtyID
      )
      if (existingReport.length > 0) {
        const users = existingReport[0].userID
        if (users.includes(req.body.userID)) {
          return res.status(400).json('Report already submitted')
        }
        const { price, convFctr, userID, marketID, cmdtyID } = req.body
        const updatedReport = await reportServices.update(
          price,
          convFctr,
          userID,
          marketID,
          cmdtyID
        )
        return res
          .status(200)
          .json({ status: 'success', reportID: updatedReport._id })
      } else {
        const data = await reportServices.addReport(req.body)
        if (!data) {
          return res.status(400).json('Something went wrong!')
        } else {
          return res.status(200).json({ status: 'success', reportID: data._id })
        }
      }
    } catch (e) {
      return res.status(500).json(e.message)
    }
  },
  getReport: async function (req, res) {
    try {
      const report = await reportServices.report(req.query.id)
      if (report.length > 0) {
        return res.status(200).json(report[0])
      } else {
        return res.status(400).json('No report Found!')
      }
    } catch (e) {
      return res.status(500).json(e.message)
    }
  },
}

module.exports = reportController
