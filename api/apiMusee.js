/**
 * Created by Taieb on 10/04/2017.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var musee = require('../models/musee');

router.get('/musee', function(req, res) {
    musee.find(function (err,musee) {
        if(err)
            return res.json(err);
        res.json(musee);
    })
});

router.post('/musee', function (req,res) {
    musee= new musee(req.body);
    musee.save(function (err) {
        if(err)
            return res.json(err);
        res.json(musee);
    })
});


router.get('/musee/:id', function(req, res) {
    musee.findById(req.params.id,function (err,musee) {
        if(!musee)
            return res.status(404).send();

        res.status(200).send(musee);
    })
});


router.delete('/musee/:id', function(req, res) {
    musee.findByIdAndRemove(req.params.id,function () {
        res.json({"success":true});
    })
});
router.put('/musee/:id', function(req, res) {
    musee.findByIdAndUpdate(req.params.id,req.body,function () {
        res.json({"success":true});
    })
});



















module.exports = router;