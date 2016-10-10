var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var Link = require('./link');

var User = db.Model.extend({
  tableName: 'users',
  defaults: {
    links: 0
  },
  links: function() {
    // return this.hasMany(Link);
    return this.hasMany(Link);
  },
  initialize: function() {
    this.on('signup', function(model, attrs, options) {
      //get username
      //get password
      //set model
      //put model into database
    });
    this.on('login', function(model, attrs, options) {
     //get model from database 
     //get urls that belong to model - database stuff?
    });
  }
});

module.exports = User;

