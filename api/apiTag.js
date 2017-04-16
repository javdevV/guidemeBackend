/**
 * Created by javdev on 4/6/2017.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var Tag = require('../models/tags');

router.get('/tags', function (req, res) {
    // var url = "https://api.paris.fr/api/data/2.1/QueFaire/get_tags/?token=fb1cba01bf7191ab033e7d7a441667ef18f77f14581e00b3b577871083fbfed4";
    // request.get(url, function (error, response, body) {
    //     var l = JSON.parse(body);
    //     res.json(l.data);
    // });

    Tag.find(function (err, tag) {
        if (err)
            res.json(err);
        res.json(tag);
    }) });



router.get('/syncTags', function (req, res) {
    var url = "https://api.paris.fr/api/data/2.1/QueFaire/get_tags/?token=fb1cba01bf7191ab033e7d7a441667ef18f77f14581e00b3b577871083fbfed4";
    request.get(url, function (error, response, body) {
        var l = JSON.parse(body);
         var tab = l.data;
        var i=0;
        for (i;i<tab.length;i++){
            var tag = new Tag(tab[i]);
            tag.save(function (err) {
                if(!err)
                    console.log("synchronized ! ");
            });
        }
        res.json("synchronized ! ");
    });
});
router.get('/getTagByTitle/:title',(req,res)=>{
    Tag.find({"title":req.params.title},{title:1},(err,tag)=>{
        if(err)
            res.json(err)
        res.json(tag);
    })
})

module.exports = router;