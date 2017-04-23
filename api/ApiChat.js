/**
 * Created by Oussema on 10/04/2017.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var Chat = require('../models/chat');

router.get('/chat', function(req, res) {
    Chat.find(function (err,chats) {
        if(err)
            return res.json(err);
        res.json(chats);
    })
});

router.post('/chat', function (req,res) {
    chat= new Chat(req.body);
    chat.save(function (err) {
        if(err)
            return res.json(err);
        res.json(chat);
    })
});
















module.exports = router;