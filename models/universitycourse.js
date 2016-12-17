var mongoose = require('./db')
var schema = mongoose.Schema

var universitycourseSchema = new schema({
  university_name: String,
  course_name: String
})

var universitycourse = mongoose.model('universitycourse', universitycourseSchema)

module.exports = universitycourse
