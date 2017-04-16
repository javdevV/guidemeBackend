/**
 * Created by javdev on 4/6/2017.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
// var User  =require('../models/user');
var User  =require('../api/user/user.model');
var mongoose = require('../config/db');
var mongodb = require('mongodb');
var ObjectId = mongodb.ObjectID;



var userId = "58f39e90734d1d3b89babfeb";
var user=new User();
User.findById({"_id":"58f39e90734d1d3b89babfeb"},function (err,doc) {
    if(err)
        res.json(err);
    user.name=doc.name;
    user.evt_tags=doc.evt_tags;
    user.evt_categories=doc.evt_categories;
});
//
// var userId = "58e6d52cdad0ee2520e160d0";
// var user=new User();
// User.findById(userId,function (err,doc) {
//     if(err)
//         res.json(err);
//     user.name=doc.name;
//     user.evt_tags=doc.evt_tags;
//     user.evt_categories=doc.evt_categories;
// });

router.post('/adduser',function (req, res) {
    var user = new User({
        name: req.body.name,
        evt_tags : req.body.evt_tags,
        evt_categories:req.body.evt_categories,
        interests:req.body.interests});
    user.save(function (err) {
        if(err)
            console.log(err);
        console.log({"succeded":"true"});
    });
});
router.put('/updateUserPosition',function (req, res) {

    User.findByIdAndUpdate({"_id":"58f39e90734d1d3b89babfeb"},{$set:
        {pos_latitude : req.body.latitude,
            pos_longitude:req.body.longitude
        }
    },function(err){
        if (err)
            return res.json(err);
        res.json({"success":true});
    });
});

router.get('/usersByPos',function (req, res) {
    User.find({},{_id:0,name:1,pos_latitude:1,pos_longitude:1},(err,users)=>{
        if(err)
            res.json(err);
        res.json(users);
    })
});


router.get('/users',function (req, res) {
    User.find(function (err,users) {
        if(err)
            res.json(err);
        res.json(users);
    })
});

router.put('/addCatToUser',function (req, res) {
    console.log("username ="+user.name);
    User.findOneAndUpdate({name: user.name}, {$push:{evt_categories:req.body}},function (err) {
        if(err)
            console.log("find one and update");
        res.json(err);
    });

});

router.put('/delCatFromUser',function (req, res) {
    console.log("username ="+user.name);
    User.findOneAndUpdate({name: user.name}, {$pull:{"evt_categories":req.body}},function (err) {
        if(err)
            console.log("find one and update");
        res.json(err);
    });

});

router.put('/addTagToUser',function (req, res) {
    console.log("username ="+user.name);
    User.findOneAndUpdate({name: user.name}, {$push:{evt_tags:req.body}},function (err) {
        if(err)
            console.log("find one and update");
        res.json(err);
    });
});
router.put('/deleteTagfromUser',function (req, res) {
    console.log("username ="+user.name);
    User.findOneAndUpdate({name: user.name}, {$pull:{evt_tags:req.body}},function (err) {
        if(err)
        res.json(err);
            console.log("find one and update");
            res.json({"gone":"true"});
    });
});

 router.get('/loadUsersTAgs',(req,res)=>{
	User.findById({"_id":"58f39e90734d1d3b89babfeb"},{_id:0,"evt_tags.id":1,"evt_tags.title":1},(err,users)=>{
        if(err)
            res.json(err);
        res.json(users);
        console.log(users);
    })
});
router.get('/loadUsersCats',(req,res)=>{
	User.findById({"_id":"58f39e90734d1d3b89babfeb"},{_id:0,"evt_tags.id":1,"evt_categories.name":1},(err,users)=>{
        if(err)
            res.json(err);
        res.json(users);
        console.log(users);
    })
});




router.put('/addInterestToUser',function (req, res) {
    console.log("username ="+user.name);
    User.findOneAndUpdate({name: user.name}, {$push:{interests:req.body}},function (err) {
        if(err)
            console.log("find one and update");
        res.json(err);
    });
});
router.put('/deleteInterestfromUser',function (req, res) {
    console.log("username ="+user.name);
    User.findOneAndUpdate({name: user.name}, {$pull:{interests:req.body}},function (err) {
        if(err)
            console.log("find one and update");
        res.json(err);
    });
});
router.get('/usersByInterest/:it',function (req, res) {
    User.find({"interests.label": req.params.it},function (err,users) {
         if(err)
            res.json(err);
        res.json(users);
    })
 })


module.exports = router;