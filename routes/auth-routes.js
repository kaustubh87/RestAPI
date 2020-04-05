const router = require('express').Router();


//Login

router.get('/login', (req, res) => {
  
  res.render('login');
});


router.get('/logout', (req, res)=>{

  res.send('logging out');

});

// auth with google

router.get('/google', (req, res) => {

  /* Handle with passport */

  res.send('Logging with google');

});

module.exports = router;