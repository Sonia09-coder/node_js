const express= require('express');
const router=express.Router();
const Person=require('./../models/Person');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//POST route to add a person
router.post('/person', async(req,res)=>{
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

//GET method to fetch a person
router.get('/', async (req,res)=>{
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

//
router.get('//:workType', async (req,res)=>{
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

//Updation of Person data using PUT method
router.put('/:id', async (req,res)=>{
    try{
        const personId=req.params.id;  //Extract the id from URL parameter
        const updatedPersonData=req.body; // Updated data from person

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,  //Return the updated document
            runValidators: true, //Run the mongoose validation
        })

        if(!response){
            return res.status(404).json({error: 'Person not found'})
        }

        console.log('response updated');
        res.status(200).json(response);
    }

    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

//Delete method
router.delete('/:id', async (req,res)=>{
    try{
        const personId=req.params.id; 
        const deletedPerson= await Person.findByIdAndRemove(personId);
        if(!deletedPerson){
            return res.status(404).json({error: 'Person not found'})
        }
        console.log('response deleted');
        res.status(200).json(deletedPerson);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

module.exports=router;