var express = require('express')
var router = express.Router()
var university = require('./../models/university')

router.route('/:name')
.get(function(req, res){
    university.find({name:req.params.name},function(err, results){
        console.log(results)
        res.render('university.ejs', {data: results})
    })
})

module.exports = router