const express= require('express');
const router=express.Router();
const Menu=require('./../models/Menu');


router.post('/', async (req,res)=>{
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
router.get('/', async (req,res)=>{
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

router.get('/menu/:tasteType', async (req,res)=>{
    try{
        const tasteType = req.params.tasteType; 
        if(tasteType== 'sour' || tasteType== 'sweet' || tasteType== 'salty' || tasteType=='spicy'){
            const response = await Menu.find({taste: tasteType});
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



module.exports=router;