/**
 * Created by Oussema on 23/04/2017.
 */


/**
 * Created by Oussema on 10/04/2017.
 */
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var chatSchema = new Schema({
    id : Number,
    senderId:String,
    message:String,
    timestamp:Number,
    image:String,
    time:String

},{collection : "chats"});
module.exports =mongoose.model('chat',chatSchema);
