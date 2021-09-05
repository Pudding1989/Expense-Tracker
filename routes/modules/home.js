const express = require('express')
const router = express.Router()

const Record = require('../../models/record')

router.get('/', (req, res) => {
  Record
    .find()
    .lean()
    .then(recordData => {
      // 計算總金額
      let totalAmount = 0
      let freeTrial = false
      recordData.forEach(data => { totalAmount += data.amount })
      // 檢查總金額1億元限制
      totalAmount >= 100000000 
        ? ((freeTrial = true), (totalAmount = false))
        : (freeTrial = false)
      res.render('index', { recordData, totalAmount, freeTrial })
    })
    .catch(error => console.error(error))
})

module.exports = router
