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

router.get('/google/redirect', (req, res) =>{
  res.send('you reached the callback URI');
});

module.exports = router;