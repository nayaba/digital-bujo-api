const express = require('express')

const router = express.Router()

const Entry = require('./../models/entry')

router.post('/create-entry', (req, res, next) => {
  Entry.create(req.body.entry)
    .then(entry => {
      res.status(201).json({ entry })
    })
    .catch(next)
})

router.get('/', (req, res, next) => {
  console.log('Hello!')
})

module.exports = router
