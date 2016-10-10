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
    //check backbone doces to see if this workd
    return this.hasOne(Links);
  },
  initialize: function() {
    this.on('signup', function(model, attrs, options) {
      // var unHashed = model.get('password');
     // hash and set password here
      // model.set('password',)
    });
  }
});

module.exports = User;

