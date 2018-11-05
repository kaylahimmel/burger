// requirements/dependencies
var express = require("express");
var mysql = require("mysql");
var expHbs = require("express-handlebars");

var port = process.env.port || 3000;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", expHbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js")

app.use(routes);

app.listen(port);