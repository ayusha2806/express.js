const express = require('express')
const app = express()

app.use(function(req,res,next){
    console.log("In The Middleware!");
    next();
})

app.use(function(req,res,next){
    console.log("In The Middleware!");
    res.send("<h1>Hello From Express.Js!</h1>")
})

app.listen(3000)