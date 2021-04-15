const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {

  res.sendFile(__dirname + "/index.html")

});

app.post("/", function(req, res) {
var superheroes = require("superheroes");
var mySuperheroName = superheroes.random();
var num1= (req.body.n1);
var result= mySuperheroName + num1;


  res.send('Your Superhero Name Is : '  + result )
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {

  console.log("Server is running successfully");
});
