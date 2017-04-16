/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var auth = require('./auth/auth.service');
var apiEvent = require('./api/apiEvent');
var apiTag = require('./api/apiTag');
var apiCat = require('./api/apiCategorie');
var apiUser = require('./api/ApiUser');
var apiBeacons = require('./api/apiBeacons');
var apiMusee = require('./api/apiMusee');
var mongoose = require('./config/db');
var interestApi = require('./api/ApiInterests');
var path = require('path');

module.exports = function (app) {

    // Insert routes below
    app.use('/api/users', require('./api/user'));
    app.use('/auth', require('./auth'));
    app.post('/forgotpassword', require('./forgotpassword').reset);
    app.use('/api', apiEvent);
    app.use('/api', apiTag);
    app.use('/api', apiCat);
    app.use('/api', apiUser);
    app.use('/api', apiBeacons);

    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });

    app.use('/interestapi', interestApi);

    app.use('/api', apiMusee);

    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(errors[404]);


    app.route('/*')
        .get(function (req, res) {
            res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
        });
};
