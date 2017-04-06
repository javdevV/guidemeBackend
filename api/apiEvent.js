/**
 * Created by javdev on 4/6/2017.
 */
var express = require('express');
var router = express.Router();
var request = require('request');



var token = "fb1cba01bf7191ab033e7d7a441667ef18f77f14581e00b3b577871083fbfed4";

router.get('/categories', function (req, res) {
    var url = "https://api.paris.fr/api/data/1.0/Equipements/get_categories/?token=fb1cba01bf7191ab033e7d7a441667ef18f77f14581e00b3b577871083fbfed4";
    request.get(url, function (error, response, body) {
        var l = JSON.parse(body);
        res.json(l.data);
    });
});
router.get('/tags', function (req, res) {
    var url = "https://api.paris.fr/api/data/2.0/QueFaire/get_univers/?token=fb1cba01bf7191ab033e7d7a441667ef18f77f14581e00b3b577871083fbfed4";
    request.get(url, function (error, response, body) {
        var l = JSON.parse(body);
        res.json(l.data);
    });
});



module.exports = router;