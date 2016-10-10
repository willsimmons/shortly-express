var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
});

module.exports = User;

///user should have a username
// user should have a password
// user has collection of links
