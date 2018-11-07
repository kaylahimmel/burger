// import `orm.js
var orm = require("../config/orm.js");


// call the ORM functions using burger specific input for the ORM
var burger = {
    // selectAll function
    selectAll: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },

    // insertOne function
    insertOne: function(values, cb) {
      orm.insertOne(values, function(res) {
        cb(res);
      });
    },
    
    // updateOne function
    updateOne: function(objColVals, updateID, cb) {
      orm.updateOne(objColVals, updateID, function(res) {
        cb(res);
      });
    }
  };


// export module
module.exports = burger;