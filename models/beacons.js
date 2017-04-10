
/**
 * Created by Oussema on 10/04/2017.
 */
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var beaconsSchema = new Schema({
    id : Number,
    uuid : String,
    minor:Number,
    major:Number

},{collection : "ibeacons"});
module.exports =mongoose.model('ibeacons',beaconsSchema);
