var mongoose = require('mongoose');
var Schema = mongoose.Schema;


module.exports = mongoose.model('User', new Schema({
    firstName: String,
    login: String,
    password: String,
    email: String,
    isAdmin: Boolean
}));