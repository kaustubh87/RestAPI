const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require("./keys.js");

passport.use(
  
  new GoogleStrategy({
  //options for Strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientId,
    clientSecret: keys.google.clientSecret

}, (accessToken, refreshToken, profile, done) => {
  //passport callback function

  console.log("Passport callback function fired");
  console.log("Profile: " +JSON.stringify(profile));
})
)