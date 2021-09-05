const express = require('express')
const router = express.Router()

const Record = require('../../models/record')

router.get('/:category', async (req, res) => {
  const category = req.params.category
  let filter = false
  category === '全部類別' ? filter = {} : filter = { category }

  // 用於檢查總金額限制
  let checkTrial = 0
  try {
    await Record
      .find()
      .lean()
      .then(recordData => {
        recordData.forEach(data => { checkTrial += data.amount })
      })

    Record
      .find(filter)
      .lean()
      .then(recordData => {
        // 檢查總金額1億元限制
        let freeTrial = false
        let totalAmount = 0
        recordData.forEach(data => { totalAmount += data.amount })
            checkTrial >= 100000000
          ? ((freeTrial = true), (totalAmount = false))
              : (freeTrial = false)
        res.render('index', { recordData, totalAmount, category, freeTrial })
      })
  } catch (error) { console.log(error) }
})

module.exports = router
