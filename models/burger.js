var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll(callback, "burgers");
  },
  insertOne: function(object, callback) {
    orm.insertOne(object, callback, "burgers");
  },
  updateOne: function(object, constraint, callback) {
    orm.updateOne(object, constraint, callback, "burgers");
  }
};

module.exports = burger;
