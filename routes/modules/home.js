const express = require('express')
const router = express.Router()

Record = require('../../models/record')

router.get('/', (req, res) => {
  Record
    .find()
    .lean()
    .then(recordData => {
     //計算總金額
      let totalAmount = 0
      recordData.forEach(data => totalAmount += data.amount)
      res.render('index', { recordData, totalAmount })
    })
    .catch(error => console.error(error))
})

module.exports = router