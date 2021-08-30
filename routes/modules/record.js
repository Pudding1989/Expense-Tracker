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
      .sort('-_id') // ==={ _id: desc}
      .limit(1)
      .then(lastDoc => {
        id = ++lastDoc[0].id
      })

    Record
      .create({ id, name, date, category, amount })
      .then(() => res.redirect('/'))
  }
  catch (error) { console.log(error) }

})

// Update Function: for Edit Page
router.get('/:id/edit', (req, res) => {
  const id = req.params.id

  Record
    .findOne({ id })
    .lean()
    .then(recordData => res.render('edit', { recordData }))
    .catch(error => console.error(error))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  let { name, date, category, amount } = req.body
  Record
    .findOne({ id })
    .then(recordData => {
      console.log(recordData)
      recordData.name = name
      recordData.date = date
      recordData.category = category
      recordData.amount = amount
      return recordData.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})

// Delete Function
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record
    .findOne({ id })
    .then(recordData => recordData.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})

module.exports = router