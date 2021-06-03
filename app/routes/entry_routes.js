const express = require('express')
const router = express.Router()

const passport = require('passport')
const requireToken = passport.authenticate('bearer', { session: false })

const customErrors = require('../../lib/custom_errors')
const requireOwnership = customErrors.requireOwnership

const Entry = require('./../models/entry')

// create
router.post('/create-entry', requireToken, (req, res, next) => {
  Entry.create(req.body.entry)
    .then(entry => {
      res.status(201).json({ entry })
    })
    .catch(next)
})

// read all
router.get('/entries', requireToken, (req, res, next) => {
  Entry.find()
    .then(entries => {
      res.status(200).json({ entries })
    })
    .catch(next)
})

// read one
router.get('/entries/:id', requireToken, (req, res, next) => {
  Entry.findById(req.params.id)
    .then(entry => {
      return res.status(200).json({ entry })
    })
    .catch(next)
})

// update
router.patch('/entries/:id', requireToken, (req, res, next) => {
  Entry.findById(req.params.id)
    .then(entry => {
      requireOwnership(req, entry)
      return entry.updateOne(req.body.entry)
    })
    .then(() => {
      res.sendStatus(204)
    })
    .catch(next)
})

// delete
router.delete('/entries/:id', requireToken, (req, res, next) => {
  Entry.findById(req.params.id)
    .then(entry => {
      requireOwnership(req, entry)
      entry.deleteOne()
    })
    .then(() => {
      res.sendStatus(204)
    })
    .catch(next)
})

module.exports = router
