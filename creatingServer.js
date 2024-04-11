//In this, we will learn to create a server using express js
const express=require('express');
const app=express();

app.get('/',function(req,res)
{
    res.send("Welcome to my cafe, What would you like to order?");
})

app.get('/idli',function(req,res)
{
    res.send("Welcome to the South Indian food menu, What would you like to order?  Idli  Rava Idli")
})

app.get('/Saag',function(req,res)
{
    res.send("Welcome to the North Indian food(Punjabi) menu, What would you like to order?  Cholle Bhature  Naan Cholle")
})

app.get('/customize',function(req,res)
{
    var customise_idli={
        name:"sambhar",
        isChutney:true,
        dosa:true
    }
    res.send(customise_idli)
})

app.post('/item',(req,res)=>{
    console.log("data is saved");
})
app.listen(3000,()=>{
    console.log('Listening on port 3000');
})