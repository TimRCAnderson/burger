var connection = require("./connection.js");

var orm = {
  selectAll: function(callback, table) {
    connection.query("SELECT * FROM ?", [table], callback);
  },
  insertOne: function(object, callback, table) {
    var keys = Object.keys(object);
    var values = [];
    for(var i = 0; i < keys.length; i++)
    {
      values.push(object[keys[i]]);
    }
    connection.query("INSERT INTO ?(?) VALUES(?)", [table, (keys.join(", ")), (values.join(", "))], callback);
  },
  updateOne: function(object, constraint, callback, table) {
    connection.query("UPDATE ? SET ? WHERE ?", [table, object, constraint], callback);
  }
};

module.exports = orm;
