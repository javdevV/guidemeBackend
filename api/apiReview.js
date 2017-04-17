/**
 * Created by Taieb on 10/04/2017.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var Review = require('../models/review');

router.get('/review', function(req, res) {
    Review.find(function (err,review) {
        if(err)
            return res.json(err);
        res.json(review);
    })
});

router.post('/review', function (req,res) {
    review= new Review(req.body);
    review.save(function (err) {
        if(err)
            return res.json(err);
        res.json(review);
    })
});


router.get('/review/:id', function(req, res) {
    Review.findById(req.params.id,function (err,review) {
        if(!review)
            return res.status(404).send();

        res.status(200).send(review);
    })
});


router.delete('/review/:id', function(req, res) {
    Review.findByIdAndRemove(req.params.id,function () {
        res.json({"success":true});
    })
});
router.put('/review/:id', function(req, res) {
    Review.findByIdAndUpdate(req.params.id,req.body,function () {
        res.json({"success":true});
    })
});



module.exports = router;