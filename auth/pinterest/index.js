'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');

var router = express.Router();

router
  .get('/', passport.authenticate('pinterest', {
    //scope: ['email', 'user_about_me'],
    failureRedirect: '/signup',
    session: false
  }))

  .get('/callback', passport.authenticate('pinterest', {
  	//successRedirect: '/main',
    failureRedirect: '/signup',
    session: false
  }), auth.setTokenCookie);


module.exports = router;