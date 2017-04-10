/**
 * Created by javdev on 4/6/2017.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var User  =require('../models/user');

var user = new User({
    name:"houssem",
    evt_tags : [{"id": 13, "title" : "Ados" }],
    evt_categories : [{"idcategories" : 47, "name": "Ateliers Beaux-Arts"}]
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
    User.findOneAndUpdate({name: user.name}, {$pull:{evt_categories:req.body}},function (err) {
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
            console.log("find one and update");
        res.json(err);
    });
});

module.exports = router;