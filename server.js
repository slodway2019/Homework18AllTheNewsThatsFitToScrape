var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;
var app = express();

var routes = require('./routes');


app.use(express.static("public"));
app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
  });
