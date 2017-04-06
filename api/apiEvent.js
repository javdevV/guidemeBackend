/**
 * Created by javdev on 4/6/2017.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var User = require('../models/user');


var user = new User({
    name:"houssem",
    evt_tags : [{"id": 13, "title" : "Ados" }],
    evt_categories : [{"idcategories" : 47, "name": "Ateliers Beaux-Arts"}]
});

var token = "fb1cba01bf7191ab033e7d7a441667ef18f77f14581e00b3b577871083fbfed4";

router.get('/events/',function (req, res, next) {
    var url = "https://api.paris.fr/api/data/2.2/QueFaire/get_events/" +
        "?token=fb1cba01bf7191ab033e7d7a441667ef18f77f14581e00b3b577871083fbfed4&categories="+user.evt_categories.idcategories+"&tags="+user.evt_tags.id+"&start=&end=&offset=&limit=";
    request.get(url,function(error, response, body){
        var l= JSON.parse(body);
        res.json(l.data);
    });
});

module.exports = router;