var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/api/", function(req, res) {
  burger.selectAll(function(err, data) {
    if(err) throw err;
    res.json(data);
  });
});

router.post("/api/", function(req, res) {
  burger.insertOne(req.body, function(err, data) {
    if(err) throw err;
    res.redirect("../");
  });
});

router.put("/api/:id", function(req, res) {
  var constraint = {id: req.params.id};
  burger.updateOne(req.body, constraint, function(err, data) {
    if(err) throw err;
    res.redirect("../");
  });
});

router.get("/", function(req, res) {
  res.render("index.handlebars");
});
