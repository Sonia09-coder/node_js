const mongoose=require('mongoose');

//Define the mongodB connection URL
const mongoURL='mongodb://localhost:27017/restaurants' //Name of the database here is restaurants

//Establish the mongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}) //abhi tak connection establish nhi hua hai

//Get the default connection
//Mongoose maintains a default connection object representing the MongoDB connection
const db=mongoose.connection;

//Define the event listeners for the database
db.on('connected', () =>{
    console.log("Connected to MongoDB server");
})

db.on('error', (err) =>{
    console.log("MongoDB connection error",err);
})

db.on('disconnected', () =>{
    console.log("MongoDB diconnected");
})

//Export the database connection
module.exports=db;