/**
 * Created by javdev on 4/6/2017.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var User  =require('../models/user');


router.post('/addUserCategory',function (req, res) {
    var user = new User({ name: req.body.name,
        evt_tags : req.body.evt_tags,
        evt_categories:req.body.evt_categories});
    user.save(function (err) {
        if(err)
            res.json(err);
        res.json({"succeded":"true"});
    });
});

router.get('/users',function (req, res) {
    User.find(function (err,users) {
        if(err)
            res.json(err);
        res.json(users);
    })
});

module.exports = router;