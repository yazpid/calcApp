var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var mongoose    = require('mongoose');
var apiRoutes = express.Router();


var User = require('./models/user');

var index = require('./routes/index');
var tasks = require('./routes/tasks');
var users = require('./routes/user');
var authenticate = require('./routes/autenticate');

var port = process.env.PORT || 3000;

var app = express();

mongoose.connect('mongodb://localhost:27017/calcApp'); // connect to database
app.set('superSecret','xxxx'); // secret variable

//view engine

app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// set static folder

app.use(express.static(path.join(__dirname, 'client')));

//body parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

apiRoutes.use(function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});


app.use('/api/users', apiRoutes);
app.use('/api/tasks', apiRoutes);




app.use('/', index);
app.use('/api', tasks);
app.use('/api', users);
app.use('/api',authenticate);

app.listen(port, function () {
    console.log("server start on "+port);
});