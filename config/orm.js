// requirements/dependencies
var mysql = require('mysql');
var connection = require("../config/connection.js");


// ORM functions
var orm = {
    // selectAll function
    selectAll: function(callback) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }            
            callback(result);
        });
    },
    
    // insertOne function
    insertOne: function(table, burger_name, devoured, callback) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)"; 
        // var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (??, ??)"; 
        connection.query(queryString, [table, burger_name, devoured], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result)
            res.redirect("/")
        });
    },
        
    // updateOne function
    updateOne: function(table, devoured, burger_name) {
        var queryString = "UPDATE ?? SET ?? WHERE ??";
        connection.query(queryString, [table, devoured, burger_name], function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result.affectedRows + " record(s) updated")
        });
    },
};
  

// Export the ORM object
module.exports = orm;