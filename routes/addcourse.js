var express = require('express')
var bodyParser = require('body-parser')
var course = require('./../models/course')
var university = require('./../models/university')
var universitycourse = require('./../models/universitycourse')
var mongoose = require('mongoose')
var router = express.Router()

router.use(bodyParser.urlencoded({extended:true}))

router.route('/')
    .get(function(req, res){
      var alluniv = new Array()
      university.find({}, function(err, universities){
        if(err){
          console.log(err)
        }
        universities.forEach(function(item){
          alluniv.push(item.name)
        })
        res.render('addcourse.ejs', {names:alluniv})
      })
    })

    .post(function(req, res){

      var newCourse = course({
        name: req.body.name,
        fees: req.body.fees,
        duration: req.body.duration
      })

      if(req.body.university == undefined || req.body.university == ""){
        res.redirect('/addcourse/#')
        return
      }

      universitycourse.find({course_name: req.body.name}, function(err, data){
        if(data.length > 0){
          console.log('course allocated to '+data[0].university_name)
          res.redirect('/addcourse/#')
        }else{
          newCourse.save(function(err){
            if(err){
              console.log(err)
            }else{
              var newUniversityCourse = universitycourse({
                university_name: req.body.university,
                course_name: req.body.name
              })
              newUniversityCourse.save(function(err){
                console.log('course saved in db');
                res.redirect('/addcourse')
              })
            }
          })
        }
      })
    })

module.exports = router
