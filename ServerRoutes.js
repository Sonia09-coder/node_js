//server file for the express routers
const express=require('express');
const app=express();
const db=require('./db');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
app.use(bodyParser.json());



app.get('/',function(req,res)
{
    res.send("Welcome to my cafe, What would you like to order?");
})
//Import the router files
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

//Use the routers
app.use('/person',personRoutes);
app.use('/',menuRoutes);


app.listen(3000,()=>{
    console.log('Listening on port 3000');
})