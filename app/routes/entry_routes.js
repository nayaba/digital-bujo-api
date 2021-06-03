const express = require('express')

const router = express.Router()

const Entry = require('./../models/entry')

// create
router.post('/create-entry', (req, res, next) => {
  Entry.create(req.body.entry)
    .then(entry => {
      res.status(201).json({ entry })
    })
    .catch(next)
})

// read all
router.get('/entries', (req, res, next) => {
  Entry.find()
    .then(entries => {
      res.status(200).json({ entries })
    })
    .catch(next)
})

// read one
router.get('/entries/:id', (req, res, next) => {
  Entry.findById(req.params.id)
    .then(entry => {
      res.status(200).json({ entry })
    })
})

// update

// delete


module.exports = router
