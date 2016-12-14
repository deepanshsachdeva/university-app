var mongoose = require('mongoose')
var schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/univapp')

var universitySchema = new schema({
  name: String,
  type: String,
  rank: Number,
  year: Number
})

// universitySchema.methods.checktype = function(){
//   if(this.type != 'public' or this.type != 'private'){
//     return false
//   }else{
//     return true
//   }
// }

var university = mongoose.model('university', universitySchema)

module.exports = university
