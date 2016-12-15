var express = require('express')
var bodyParser = require('body-parser')
var university = require('../models/university')
var mongoose = require('mongoose')
var router = express.Router()

router.use(bodyParser.urlencoded({extended:true}))
router.use(function(req, res, next){
  if(req.body.type != undefined){
    var type = req.body.type
    if(type){
      if(type == 'public' || type == 'private'){
        next()
      }else{
        res.redirect('/adduniv/#')
      }
    }
  }else{
    next()
  }
})

router.route('/')
    .get(function(req, res){
      res.render('adduniv.ejs', {})
    })

    .post(function(req, res){

      var newUniversity = university({
        name: req.body.name,
        type: req.body.type.toLowerCase(),
        rank: req.body.rank,
        year: req.body.year
      })

      newUniversity.save(function(err){
        if(err){
          throw err
        }else{
          console.log('university added')
          res.redirect('/adduniv')
        }
      })
    })

module.exports = router
