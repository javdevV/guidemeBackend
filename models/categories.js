/**
 * Created by javdev on 4/6/2017.
 */

var mongoose = require ('mongoose');
// var mongoose = require('../config/db');

var Schema = mongoose.Schema;

var categoriesSchema = new Schema({
    idcategories : Number,
    name : String

},{collection : "categories"});
module.exports =mongoose.model('Categories',categoriesSchema);
