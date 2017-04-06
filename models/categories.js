/**
 * Created by javdev on 4/6/2017.
 */

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var categoriesSchema = new Schema({
    idcategories : Number,
    name : String,

},{collection : "Categories"});
module.exports =mongoose.model('Categories',categoriesSchema);
