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
        if (err) {
            console.log(err)
        }
        res.json(users);
    })
});

//get single user

router.get('/user/:id', function (req, res, next) {
    db.users.findOne({_id: mongojs.ObjectId(req.params.id)}, function (err, user) {
        if (err) {
            res.send(err)
        }
        res.json(user);

    })
});

router.post('/user', function (req, res) {

    // create a sample user
    // var nick = new User({
    //     name: 'Nick',
    //     password: 'password',
    //     admin: true
    // });

    var user = new User({
        firstName: req.body.firstName,
        login: req.body.login,
        email: req.body.email,
        password: req.body.password,
        isAdmin: false
    });

    // save the sample user

    if (!user.firstName || !user.login || !user.password || !user.email){
        res.status(400);
        res.json({
            error : "Bad data"
        })
    }else {
        db.users.save(user, function (err, user) {
            if (err) {
                res.send(err)
            }
            res.status(200);
            res.json({
                firstName: user.firstName,
                login: user.login,
                email: user.email,
            });
        })
    }



});

module.exports = router;