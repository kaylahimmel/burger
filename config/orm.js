// requirements/dependencies
var mysql = require('mysql');
var connection = require("../config/connection.js");


// ORM functions
var orm = {
    // selectAll function to show all burgers
    selectAll: function(callback) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }            
            callback(result);
        });
    },
    
    // insertOne function to add new burgers to the menu
    insertOne: function(values, callback) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)"; 
        connection.query(queryString, values, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result)
            // res.redirect("/")
        });
    },
     

    // updateOne function to "devour" a burger and move it to the "eaten" div
    updateOne: function(table, devoured, burger_name) {
        var queryString = "UPDATE burgers SET ?? WHERE ??";
        connection.query(queryString, [devoured, burger_name], function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result.affectedRows + " record(s) updated")
        });
    },
};
  

// Export the ORM object
module.exports = orm;