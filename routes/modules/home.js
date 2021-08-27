const express = require('express')
const router = express.Router()

Record = require('../../models/record')

router.get('/', (req, res) => {
  Record
    .find()
    .lean()
    .then(res.send('<h1>Hi~ Express Service connected Success<h1>'))
    .catch(error => console.error(error))
})

module.exports = router