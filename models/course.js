var mongoose = require('mongoose')
var schema = mongoose.Schema

mongoose.createConnection('mongodb://localhost:27017/univapp')

var courseSchema = new schema({
  name: String,
  fees: Number,
  duration: Number
})

var course = mongoose.model('course', courseSchema)

module.exports = course
