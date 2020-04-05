const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');


passport.use(
  
  new GoogleStrategy({
  //options for Strategy
}), () =>{
  //passport callback function
})