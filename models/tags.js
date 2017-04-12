/**
 * Created by javdev on 4/6/2017.
 */

var mongoose = require ('mongoose');
// var mongoose = require('../config/db');

var Schema = mongoose.Schema;

var tagsSchema = new Schema({
    id : Number,
    title : String

},{collection : "tags"});
module.exports =mongoose.model('Tags',tagsSchema);
