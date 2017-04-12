var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var apiEvent =require('./api/apiEvent');
var apiTag =require('./api/apiTag');
var apiCat =require('./api/apiCategorie');
var apiUser = require('./api/ApiUser');
 var apiBeacons = require('./api/apiBeacons');
 var apiMusee= require('./api/apiMusee');
 var mongoose = require('./config/db');
var interestApi=require('./api/ApiInterests');
var app = express();
 

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
     next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/api', apiEvent);
app.use('/api',apiTag);
app.use('/api',apiCat);
app.use('/api',apiUser);
 app.use('/api',apiBeacons);
// catch 404 and forward to error handler
  
app.use('/interestapi', interestApi);
 
app.use('/api',apiMusee);
 // catch 404 and forward to error handler
 app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
