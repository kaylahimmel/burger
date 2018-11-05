// requirements/dependencies
var mysql = require('mysql');
var connection = require("../config/connection.js");


// ORM functions
var orm = {
    // selectAll function
    selectAll: function(callback) {
        var queryString = "SELECT * FROM burgers";
        console.log(queryString)
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }            
            callback(result);
        });
    },
    
    // insertOne function
    insertOne: function(table, burger_name, devoured) {
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (??, ??)"; 
        connection.query(queryString, [table, burger_name, devoured], function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result)
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
            console.log(rresult.affectedRows + " record(s) updated")
        });
    },
};
  

// Export the ORM object
module.exports = orm;