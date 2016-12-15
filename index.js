var http = require('http')
var express = require('express')
var port = process.env.port || 3000
var app = express()

app.set('view engine', 'ejs')

app.use('/adduniv', require('./routes/adduniv'))
app.use('/addcourse', require('./routes/addcourse'))
app.use('/display', require('./routes/display'))
app.use('/univ', require('./routes/univ'))

app.listen(port, function(){
  console.log('server running on port '+port)
})
