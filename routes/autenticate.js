var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var jwt = require('jsonwebtoken');
var User = require('../models/user');


var app = express();
app.set('superSecret', 'xxxx'); // secret variable


var url = 'mongodb://localhost:27017/calcApp';
var collection = ['users'];
var db = mongojs(url, collection);


router.post('/authenticate', function (req, res, next) {
    // User.findOne({
    //     name : req.body.name
    // }, function (err, user) {
    //    if(err) throw err;
    //
    //    console.log("user",user);
    //    res.json(user);
    // });

    db.users.find({name: "Nick", password: "password"}, function (err, user) {
        console.log("user", user);

        var test = {
                name : user.name,
                password : user.password
        };
        var token = jwt.sign(test, app.get('superSecret'), {
            expiresIn: 60 * 60  // expires in 24 hours
        });

        res.json({
            token : token,
            user : user
        })
    });
    // db.users.find({name: req.body.name}, function (err, user) {
    //     if (err) {
    //         res.send(err);
    //     }
    //     else {
    //         var test = {
    //             title : "sss",
    //             isDone : true
    //         };
    //         console.log(user);
    //         var token = jwt.sign(test, app.get('superSecret'), {
    //             expiresIn : 60*60*24 // expires in 24 hours
    //         });
    //
    //
    //         res.json({
    //             success : true,
    //             token: token
    //         });
    //     }
    //
    // });
});


module.exports = router;