var express = require('express')
var router = express.Router()
var mongoclient = require('mongodb').MongoClient

mongoclient.connect('mongodb://localhost:27017/university', function(err, database){
  if(err){
    console.log(err);
  }
  db = database
})

router.get('/', function(req, res){
  db.collection('mapping').aggregate([{
    $group:{
      _id: "$university",
      univ: "$university",
      courses:{ $addToSet: "$name"}
    },
    $project:{
      univ : 1,
      courses : 1
    }
  }], function(err, results){
    res.json(results)
  })
})

module.exports = router
