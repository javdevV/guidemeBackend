/**
 * Created by javdev on 4/6/2017.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var Category = require('../models/categories');

router.get('/categories',function (req,res) {
    // var url = "https://api.paris.fr/api/data/1.0/Equipements/get_categories/?token=fb1cba01bf7191ab033e7d7a441667ef18f77f14581e00b3b577871083fbfed4";
    // request.get(url,function(error, response, body){
    //     var l= JSON.parse(body);
    //     res.json(l.data);
    // });
    Category.find(function (err, cat) {
        if (err)
            res.json(err);
        res.json(cat);
    })
});
router.get('/syncCategories', function (req, res) {
     var url = "https://api.paris.fr/api/data/1.0/Equipements/get_categories/?token=fb1cba01bf7191ab033e7d7a441667ef18f77f14581e00b3b577871083fbfed4";
    request.get(url, function (error, response, body) {
        var l = JSON.parse(body);
        var tab = l.data;
        var i=0;
        for (i;i<tab.length;i++){
            var category = new Category(tab[i]);
            category.save(function (err) {
                if(!err)
                    console.log("synchronized ! ");
            });
        }
        res.json("synchronized ! ");
    });
});
router.get('/getCatByName/:name',(req,res)=>{
    Category.find({"name":req.params.name},{name:1},(err,cat)=>{
        if(err)
            res.json(err)
        res.json(cat);
    })
});


module.exports = router;