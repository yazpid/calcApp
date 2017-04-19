var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var User = require('../models/user');

var url = 'mongodb://localhost:27017/calcApp';
var collection = ['users'];
var db = mongojs(url, collection);


// get all users
router.get('/users', function (req, res, next) {
   db.users.find(function (err, users) {
       if(err){
           console.log(err)
       }
       res.json(users);
   })
});

//get single user

router.get('/user/:id', function (req, res, next) {
    db.users.findOne({_id : mongojs.ObjectId(req.params.id)}, function (err, user) {
        if (err){
            res.send(err)
        }
        res.json(user);

    })
});

router.get('/createUser', function(req, res) {

    // create a sample user
    var nick = new User({
        name: 'Nick',
        password: 'password',
        admin: true
    });

    // save the sample user

    db.users.save(nick, function (err, nick) {
        if(err){
            res.send(err)
        }
        res.json(nick);
    })


    // nick.save(function(err) {
    //     if (err) throw err;
    //
    //     console.log('User saved successfully');
    //     res.json({ success: true });
    // });
});

module.exports = router;