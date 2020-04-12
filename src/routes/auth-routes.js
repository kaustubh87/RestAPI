const router = require('express').Router();
const passport = require('passport');

//Login

router.get('/login', (req, res) => {
  
  res.render('login');
});


router.get('/logout', (req, res)=>{

  res.send('logging out');

});

// auth with google

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//callback route for google to redirect to

router.get('/google/redirect', passport.authenticate('google'), (req, res) =>{
  res.send('you reached the callback URI');
  //Exchanging code for profile info.
});

module.exports = router;