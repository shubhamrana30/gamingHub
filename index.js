var express = require("express")
var path=require('path');
var app = express()

app.use(express.static('public'));
var server = app.listen(process.env.PORT||3000,function(){
    console.log("listening to port 3000")
})

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'mainpage.html'))
})

app.get('/sudoku',function(req,res){
    res.redirect('sudoku.html')
})