const express = require('express')
const app = express();
const path = require('path')

// to use form data handle
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// dirname gives ur current path path.join gives ur path 
//for every req static files are found here 
app.use(express.static(path.join(__dirname,'public')));
// render 
app.set('view engine', 'ejs');

//router 
app.get("/", function(req,res){
    res.render("index")
})

app.get("/profile/:username", function(req,res){
    req.params.username
    res.send(req.params.username)
})

app.get("/profile/:username/:age", function(req,res){
    req.params.username
    res.send(`welcome, ${req.params.username}`)
})

app.listen(3000, function(){
    console.log("it is running");
})