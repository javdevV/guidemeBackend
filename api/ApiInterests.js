/**
 * Created by User on 4/6/2017.
 */

 //sourour file
var express = require('express');
var router = express.Router();
var Interest = require('../models/interestModel');

router.post('/', function (req, res, next) {
    var todo = new Interest(req.body);

    todo.save(function (err, interests) {
        if (err) return res.json(err);
        res.json(interests);
    });
});
router.get('/', function (req, res, next) {
    Interest.find(function (err, interests) { //function de callback a executer à la fin de la requete
        if (err) return res.json(err);
        res.status(200).json(interests);
    });
});


router.get('/:lab', function (req, res, next) {
    Interest.findOne({label: req.params.lab}, function (err, interest) {
        if (err)
            return res.json(err);
        res.status(200).json(interest);
    });
});
router.get('/id/:id', function (req, res, next) {
    Interest.findById(req.params.id, function (err, interest) {
        if(!interest)
            return res.status(404).send();
        else
            res.status(200).send(interest);
    });
});
router.put('/:id', function (req, res, next) {
    Interest.findByIdAndUpdate({_id:req.params.id}, req.body, function (err, interest) {//or findOneAndUpdate
        if (err)
            return res.json(err);
        res.status(200).json(interest);
    });
});

router.delete('/:id', function (req, res, next) {
    Interest.findByIdAndRemove({_id:req.params.id}, function (err, interest) {
        if (err)
            return res.json(err);
        res.status(200).json({"deleted":true});
    });
});
module.exports=router;