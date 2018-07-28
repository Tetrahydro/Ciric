var express = require("express");
var app = express();
var bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("files"));

app.get("/", function(req,res){
    res.render("home.ejs");
});

app.get("/cazare", function(req,res){
    res.render("cazare.ejs");
});

app.get("/restaurant", function(req,res){
    res.render("restaurant.ejs");
});

app.get("/conferinte", function(req,res){
    res.render("conferinte.ejs");
});

app.get("/agrement", function(req,res){
    res.render("agrement.ejs");
});

app.get("/evenimente", function(req,res){
    res.render("evenimente.ejs");
});

app.get("/galerie", function(req,res){
    res.render("galerie.ejs");
});

app.get("/contact", function(req,res){
    res.render("contact.ejs");
});

app.listen(process.env.PORT, process.env.IP, function (){ 
   console.log('server listening!'); 
});