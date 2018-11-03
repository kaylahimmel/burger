// requirements/dependencies
var mysql = require('mysql');
var connection = require("../config/connection.js");

// ORM functions
var orm = {
    // selectAll function
    selectAll: function(columnsToSelect, table) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [columnsToSelect, table], function(err, result) {
            if (err) {
                throw err;
            }            
            console.log(result);
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