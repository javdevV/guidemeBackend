/**
 * Created by javdev on 4/6/2017.
 */
 var mongoose =require('mongoose');
mongoose.Promise = global.Promise;
console.log('connected .. ');
module.exports = mongoose.connect('mongodb://localhost/guideme');