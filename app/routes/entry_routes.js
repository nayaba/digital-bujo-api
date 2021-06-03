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
    .catch(next)
})

// update
router.patch('/entries/:id', (req, res, next) => {
  Entry.findById(req.params.id)
    .then(entry => {
      return entry.updateOne(req.body.entry)
    })
    .then(() => {
      res.sendStatus(204)
    })
    .catch(next)
})

// delete
router.delete('/entries/:id', (req, res, next) => {
  Entry.findById(req.params.id)
    .then(entry => {
      entry.deleteOne()
    })
    .then(() => {
      res.sendStatus(204)
    })
    .catch(next)
})

module.exports = router
