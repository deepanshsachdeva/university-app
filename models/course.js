var mongoose = require('./db')
var schema = mongoose.Schema

var courseSchema = new schema({
  name: String,
  fees: Number,
  duration: Number
})

var course = mongoose.model('course', courseSchema)

module.exports = course
