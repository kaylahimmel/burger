// requirements/dependencies
var mysql = require("mysql");
var connection;

// setup the code to connect Node to MySQL
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 8889,
        user: "root",
        password: "root",
        database: "burgers_db" 
    });
};

// make the connection
connection.connect(function(err) {
    // return error if something is wrong
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    // log the connection in the console when the successful connection is made
    console.log("connected as id " + connection.threadId);
});


// Export the connection
module.exports = connection;