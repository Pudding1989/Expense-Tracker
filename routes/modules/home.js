const express = require('express')
const router = express.Router()

Record = require('../../models/record')
iconSet = require('../../models/icon')

router.get('/', (req, res) => {
  Record
    .find()
    .lean()
    .then(recordData => {
     //計算總金額
      let totalAmount = 0

      recordData.forEach(data => {
        //順便計算總金額
        totalAmount += data.amount
        //增加icon類別，對應font awesome
        switch (data.category) {
          case '家居物業': data.icon = iconSet.house
            break
          case '交通出行': data.icon = iconSet.van
            break
          case '休閒娛樂': data.icon = iconSet.grin
            break
          case '餐飲食品': data.icon = iconSet.tableware
            break
          case '其他': data.icon = iconSet.pen
          default: data.icon = iconSet.pen
            break
        }

      })
      res.render('index', { recordData, totalAmount })
    })
    .catch(error => console.error(error))
})

module.exports = router