/**
 * Created by User on 4/6/2017.
 */
var mongoose= require('mongoose');

var interest = new mongoose.Schema({
    label : String

},{collection:'interests'});

module.exports=mongoose.model('Interest',interest);
