/**
 * Created by javdev on 4/6/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var Tag = require('../models/tags');
// var Cat = require('../models/categories');

var tagsSchema = new Schema({id: Number, title: String});
var categoriesSchema = new Schema({idcategories: Number, name: String});

var userSchema = new Schema({
    name: String,
    evt_tags: [tagsSchema],
    evt_categories: [categoriesSchema]

}, {collection: "Users"});
module.exports = mongoose.model('User', userSchema);