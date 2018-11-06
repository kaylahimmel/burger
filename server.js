// requirements/dependencies
var express = require("express");
var mysql = require("mysql");
var expHbs = require("express-handlebars");

var routes = require("./controllers/burgers_controller.js")

// app and port setup
var port = process.env.port || 3000;
var app = express();

// set the app to use the burgers_controller.js file for the GET/POST/PUT routes
app.use(routes);

// set the app to use the files in the public folder as basis of app
app.use(express.static("public"));

// parse the app body code into JSON object
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

// set engine as handlebars
app.engine("handlebars", expHbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// set the server to listen on our specified port 3000 is another one is not found within the code
app.listen(port, function() {
    //console log the port so user knows the app is connected
    console.log("Server is connected and listening on: http://localhost:" + port)
});