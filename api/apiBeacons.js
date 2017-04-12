/**
 * Created by Oussema on 10/04/2017.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var Beacon = require('../models/beacons');

router.get('/beacons', function(req, res) {
    Beacon.find(function (err,beacons) {
        if(err)
            return res.json(err);
        res.json(beacons);
    })
});

router.post('/beacons', function (req,res) {
    Beacon= new Beacon(req.body);
    Beacon.save(function (err) {
        if(err)
            return res.json(err);
        res.json(Beacon);
    })
});


router.get('/beacons/:id', function(req, res) {
    Beacon.findById(req.params.id,function (err,beacons) {
        if(!beacons)
            return res.status(404).send();

        res.status(200).send(beacons);
    })
});


router.delete('/beacons/:id', function(req, res) {
    Beacon.findByIdAndRemove(req.params.id,function () {
        res.json({"success":true});
    })
});
router.put('/beacons/:id', function(req, res) {
    Beacon.findByIdAndUpdate(req.params.id,req.body,function () {
        res.json({"success":true});
    })
});



















module.exports = router;