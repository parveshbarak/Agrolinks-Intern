'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const db = require('./config/db')
const reportRoute = require('./routes/reportRoute')

dotenv.config()

db()

const app = express()

app.use(bodyParser.json({ limit: '50mb' }))
app.use(
  bodyParser.urlencoded({
    extended:true,
    limit: '50mb'
  })
)

app.use('/', reportRoute)

const { PORT } = process.env
app.listen(PORT, () => {
  console.log(`Sever is running at PORT ${PORT}`)
})