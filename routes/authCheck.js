var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var jwt = require('jsonwebtoken');


var app = express();
app.set('superSecret', 'xxxx'); // secret variable


var url = 'mongodb://localhost:27017/calcApp';
var collection = ['users'];
var db = mongojs(url, collection);

router.post('/auth', function (req, res, next) {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function(err, decoded) {
            if (err) {
                res.status(403);
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                res.status(200);
                res.json({success : true});
                // if everything is good, save to request for use in other routes
                // req.decoded = decoded;
                // next();


            }
        });

    }
});

module.exports = router;