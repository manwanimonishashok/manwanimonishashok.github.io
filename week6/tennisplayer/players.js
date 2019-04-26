'use strict';

var express = require("express");


var bodyParser = require("body-parser");

var app = express();


app.set("view engine", "hbs");


app.use(bodyParser.urlencoded({ extended: false }));



var DB = [];

app.get("/", function(request, response){
    
    var data = {
        db: DB,
        
    }
    response.render("players.hbs", data); 
});

app.post("/players", function(request, response){
    
       
        var data = {
            name: request.body.name,
            location: request.body.location,
            
        };
    
        DB.push(data);
            
        response.redirect("/"); 
});

app.listen(3000);