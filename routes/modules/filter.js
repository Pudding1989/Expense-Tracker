const express = require('express')
const router = express.Router()

const Record = require('../../models/record')

router.get('/:category', (req, res) => {
  const category = req.params.category
  let filter = false
  category === "全部類別"  ? filter = {} : filter = { category }
    Record
      .find(filter)
      .lean()
      .then(recordData => {
        let totalAmount = 0
        recordData.forEach(data => totalAmount += data.amount)
        res.render('index', { recordData, totalAmount, category })
      })
      .catch(error => console.error(error))
  })


module.exports = router