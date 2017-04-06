/**
 * Created by javdev on 4/6/2017.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var User = require('../models/user');



var token = "fb1cba01bf7191ab033e7d7a441667ef18f77f14581e00b3b577871083fbfed4";

router.get('/events/',function (req, res, next) {

    var user = new User({
        name:"houssem",
        evt_tags : [{"id": 13, "title" : "Ados" }],
        evt_categories : [{"idcategories" : 47, "name": "Ateliers Beaux-Arts"}]
    });
    //console.log(user.name);
    var tableau = [];
    for(var i=0;i<user.evt_tags.length;i++){
        tableau.push(user.evt_tags[i].id)
    }
    console.log(tableau);

    // var url = "https://api.paris.fr/api/data/2.2/QueFaire/get_events/?token=fb1cba01bf7191ab033e7d7a441667ef18f77f14581e00b3b577871083fbfed4&categories="+47+"&tags="+13;
       var url = "https://api.paris.fr/api/data/2.2/QueFaire/get_events/?token=fb1cba01bf7191ab033e7d7a441667ef18f77f14581e00b3b577871083fbfed4&categories="+user.evt_categories.id+"&tags="+user.evt_tags.id+"&start=&end=&offset=&limit=";
        request.get(url,function(error, response, body){
        var l= JSON.parse(body);
        console.log(l.data);
        res.json(l.data);
    });
});

module.exports = router;