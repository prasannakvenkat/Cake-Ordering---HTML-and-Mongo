var express = require("express");
var app = express();
var port = 3000;
 
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017");

app.use("/", (req, res) => {
 res.sendFile(__dirname + "/pricing.html");
 res.sendFile(__dirname+"/index.html");
});
 

 
 var nameSchema = new mongoose.Schema({
 firstName: String,
 lastNameName: String
});

 var User = mongoose.model("User", nameSchema);
app.listen(port, () => {
 console.log("Server listening on port " + port);
});