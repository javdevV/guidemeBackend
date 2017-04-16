/**
 * Taieb.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var museeSchema = new Schema({
    id:Number,
    title : String,
    latitude : Number,
    longitude:Number,
    ouverture:String,
    img:String

},{collection : "musee"});
module.exports =mongoose.model('musee',museeSchema);
