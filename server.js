var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var mongoose    = require('mongoose');

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

app.use('/', index);
app.use('/api', tasks);
app.use('/api', users);
app.use('/api',authenticate);

app.listen(port, function () {
    console.log("server start on "+port);
});