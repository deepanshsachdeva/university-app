var mongoose = require('./db')
var schema = mongoose.Schema

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
