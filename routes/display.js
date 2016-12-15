var express = require('express')
var router = express.Router()
var universitycourse = require('./../models/universitycourse')


router.get('/', function(req, res){
  universitycourse.aggregate([
    {
      $group:{
        _id: "$university_name",
        courses:{ $addToSet: "$course_name"}
      }
    },
    {
      $project:{
        _id:0,
        university: "$_id",
        courses:1
      }
  }], function(err, results){
    res.render('display.ejs', {data: results})
  })
})

module.exports = router
