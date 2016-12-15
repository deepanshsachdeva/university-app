var mongoose = require('mongoose')
var schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/univapp')

var universitySchema = new schema({
  name: String,
  type: {
    type: String,
    enum: ['public', 'private']
  },
  rank: Number,
  year: Number
})

var university = mongoose.model('university', universitySchema)

module.exports = university
