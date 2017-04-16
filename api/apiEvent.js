/**
 * Created by javdev on 4/6/2017.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var User = require('../api/user/user.model');


var token = "fb1cba01bf7191ab033e7d7a441667ef18f77f14581e00b3b577871083fbfed4";

 //58f39e90734d1d3b89babfeb
var userId = "58f39e90734d1d3b89babfeb";
var user=new User();
User.findById({"_id":"58f39e90734d1d3b89babfeb"},function (err,doc) {
    if(err)
        console.log(err);
    console.log(doc);
    user.name=doc.name;
    user.evt_tags=doc.evt_tags;
    user.evt_categories=doc.evt_categories;
 });
router.get('/events/',function (req, res, next) {
    console.log("user ligne 25 :   "+user);
    var userTags = [];
    var userCats =[];
    for(var i=0;i<user.evt_tags.length;i++){
        userTags.push(user.evt_tags[i].id)
    }
    for(var j=0;j<user.evt_categories.length;j++){
        userCats.push(user.evt_categories[j].idcategories)
    }
    console.log("length cats : "+userCats.length);
    console.log("length tags : "+userTags.length);

    var url = "https://api.paris.fr/api/data/2.2/QueFaire/get_events/?token=fb1cba01bf7191ab033e7d7a441667ef18f77f14581e00b3b577871083fbfed4&start=&end=&offset=&limit=&categories=";
    //&categories="+user.evt_categories.id+"&tags="+user.evt_tags.id+"&start=&end=&offset=&limit=
    for (var k = 0 ;k<userCats.length;k++){
        url=url+userCats[k].toString()+",";
    }
    url=url.substring(0,url.length -1);
    url=url+"&tags=";
    for (var t = 0 ;t<userTags.length;t++){
        url=url+userTags[t].toString()+",";
    }
    url=url.substring(0,url.length-1);
    console.log("new url : " +url);

    request.get(url,function(error, response, body){
        var l= JSON.parse(body);
        console.log("events : "+l.data);
        res.json(l.data);
    });
});

module.exports = router;