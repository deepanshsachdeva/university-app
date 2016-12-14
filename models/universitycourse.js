var mongoose = require('mongoose')
var schema = mongoose.Schema

mongoose.createConnection('mongodb://localhost:27017/univapp')

var universitycourseSchema = new schema({
  university_name: String,
  course_name: String
})

var universitycourse = mongoose.model('universitycourse', universitycourseSchema)

module.exports = universitycourse
