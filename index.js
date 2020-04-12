var express = require('express');
const authRoutes = require('./routes/auth-routes.js');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();



var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
//connect to DB

mongoose.connect(keys.mongodb.dbURI, () => {
  console.log('Connected to MongoDB');
});
var port = process.env.PORT || 3000;

app.use('/auth', authRoutes);

app.get('/', function (req, res) {
  res.render('home');
  //res.send('Inside Get ');
});

// app.post('/login', function (req, res) {
//   res.send('Inside Post');
// });



app.listen(port, (req, res)=>{
  console.log("Server running at " +port);
});