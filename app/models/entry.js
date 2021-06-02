const mongoose = require('mongoose')
const { Schema } = mongoose

const entrySchema = new Schema({
  text: {
    type: String,
    required: true
  }
}, {
  timestamp: true
})

module.exports = mongoose.model('Entry', entrySchema)
