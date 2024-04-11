const express=require('express');
const app=express();
const db=require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json());

const Person=require('./models/Person');
const Menu=require('./models/Menu');

app.get('/',function(req,res)
{
    res.send("Welcome to my cafe, What would you like to order?");
})

//Post route to add a person
/*
app.post('/person',(req,res)=>{
    //const data=req.body; //assuming the request body contains the person data
    //Create a new person document using the mongoose model
   // const newPerson=new Person(data); //so we passed the data here
    newPerson.name= data.name;
    newPerson.age= data.age;
    newPerson.mobile= data.mobile;
    newPerson.email= data.email;
    newPerson.salary= data.salary; //yeh akele akele data pass krna is quite clumsy

    //Save the new person to database
    
    newPerson.save((error,savedPerson) =>{
        if(error){
            console.log('Error saving person details',error);
            res.status(500).json({error: 'Internal server error'})
        }
        else{
            console.log('Error saving person details',error);
            res.status(200).json(savedPerson);
        }
    })
})
*/
 //this method has been depreciated and it is a callback method for which data has to wait for the completion of main data

//POST route to add a person 
app.post('/person', async(req,res)=>{
    try{
        const data= req.body;
        const newPerson= new Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

//GET method to get the person
app.get('/person', async (req,res)=>{
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

//POST method to add items in the menu
app.post('/menu', async (req,res)=>{
    try{
        const data= req.body;
        const newMenu= new Menu(data);
        const response = await newMenu.save();
        console.log('data of menu has been saved');
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
});

//GET method to fetch menu
app.get('/menu', async (req,res)=>{
    try{
        const data = await Menu.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
});

//Parameterized API in get method
app.get('/person/:workType', async (req,res)=>{
    try{
        const workType = req.params.workType; 
        if(workType== 'chef' || workType== 'manager' || workType== 'waiter'){
            const response = await Person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error: 'Invalid work type'})
        }
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})



app.listen(3000,()=>{
    console.log('Listening on port 3000');
})