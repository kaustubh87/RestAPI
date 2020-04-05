const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require("./keys.js");

passport.use(
  
  new GoogleStrategy({
  //options for Strategy
    clientId: keys.google.clientId,
    clientSecret: keys.google.clientSecret

}), () =>{
  //passport callback function
})