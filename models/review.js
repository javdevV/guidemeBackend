/**
 * Taieb.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    id:Number,
    title: String,
    description: String,
    rating: Number

},{collection : "review"});
module.exports =mongoose.model('review',reviewSchema);
