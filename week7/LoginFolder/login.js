'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var mongodb = require('mongodb')

var app = express()
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "hbs");

var DB;

var mongoClient = new mongodb.MongoClient("mongodb://localhost:27017/users", { useNewUrlParser: true });
mongoClient.connect(function (error) {
    if (error) {
        console.log("Error connecting to MongoDB.")
    } else {
        console.log("Connection to MongoDB database blog established.");
    }
    DB = mongoClient.db("users");
});

//The Signup Form

app.get("/signup", function (request, response) {

    var data = {}
    if (request.query.success) {
        data.userCreated = true;
    }
    response.render("signupform.hbs", data)
});

app.post("/signup", function (request, response) {

    var data = {
        userName: request.body.userName,
        password: request.body.password
    }

    DB.collection("user").insertOne(data, function (error, result) {
        if (error) {
            response.send("Error while signup.");
        } else {
            response.redirect("/signupform?success=true");
        }
    })
});

//The login form

app.get("/login", function (request, response) {
    var data = {}
    if(request.query.success){
        data.logIn = true;
    }
    response.render("loginform.hbs",data)
});

app.post("/login", function (request, response) {
    var data = {
        userName: request.body.userName,
        password: request.body.password
    }
    DB.collection("user").findOne({ userName: data.userName, password: data.password}, function (error, data) {
        if (error) {
            response.send("Error :Not Found");
            return;
        }
        else {
            response.redirect("/loginform?success=true");
        }

    })
});


app.listen(3000);