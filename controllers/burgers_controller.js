// requirements/dependencies
var express = require("express");
var mysql = require("mysql");
var expressHandlebars = require("express-handlebars");

var burger = require("../models/burger.js");

// not sure if I need this line:
var port = 3000;

// setup router 
var router = express.Router();

// GET method
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var burgerData = {
            burgers: data
        };
        console.log(burgerData);
        res.render("index", burgerData);
    });
});
  
// POST method
router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});
 
// PUT method
router.put("/api/burgers/:id", function(req, res) {
    var updateID = "id = " + req.params.id;
  
    console.log("updateID", updateID);
  
    burger.updateOne({
        devoured: req.body.devoured
    }, updateID, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so send a 404 error message
            return res.status(404).end();
        } else {
            // send a 200 (success) message
            res.status(200).end();
        }
    });
});


// export the router
module.exports = router;