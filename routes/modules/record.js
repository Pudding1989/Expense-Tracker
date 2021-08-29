const express = require('express')
const record = require('../../models/record')
const router = express.Router()

const Record = require('../../models/record')

//Create Function: for New Page
router.get('/new', (req, res) => res.render('new'))

router.post('/', async (req, res) => {
  let id = ''
  const { name, date, category, amount } = req.body

  try {
    await Record
      .find()
      .lean()
      .then(recordDate => {
        id = ++recordDate.length
        console.log(`id: ${id}, date: ${date}, date: ${date}, category: ${category}, amount: ${amount}`)
      })
    
    Record
      .create({ id, name, date, category, amount })
      .then(() => res.redirect('/'))
  }
  catch (error) { console.log(error) }

})

module.exports = router