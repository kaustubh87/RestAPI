var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;


app.get('/', function (req, res) {
  res.send('Inside Get ');
});

app.post('/login', function (req, res) {
  res.send('Inside Post');
});



app.listen(port, (req, res)=>{
  console.log("Server running at " +port);
});