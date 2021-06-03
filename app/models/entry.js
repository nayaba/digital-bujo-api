const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    enum: ['*', '-', '+', '>'],
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Entry', entrySchema)
