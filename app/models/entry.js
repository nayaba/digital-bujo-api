const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Entry', entrySchema)
