const express = require('express')
const router = express.Router()
const reportController = require('../controllers/reportController')

router
  .route('/report')
  .post(reportController.createReport)
  .get(reportController.getReport)

module.exports = router
