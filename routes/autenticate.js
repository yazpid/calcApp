var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var jwt = require('jsonwebtoken');


var app = express();
app.set('superSecret', 'xxxx'); // secret variable


var url = 'mongodb://localhost:27017/calcApp';
var collection = ['users'];
var db = mongojs(url, collection);


router.post('/authenticate', function (req, res, next) {
    var name = req.body.name;
    var password = req.body.password;
    db.users.findOne({name: name, password: password}, function (err, user) {

            if(user){
                var options = {
                    'expiresIn': '25s'
                };
                var token = jwt.sign(user, app.get('superSecret'), options);
                res.status(200);
                res.json({
                    token : token,
                    userName : user.name
                })
            }else {
                res.status(403);
                res.json({
                    error : "bad data"
                })
            }

    });
});


module.exports = router;