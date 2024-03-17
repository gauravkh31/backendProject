const express = require('express')
const router = express.Router();
const Person = require('./../models/person');

router.post('/', async (req,res)=>{


    try {
        const data = req.body
        const newPerson = new Person(data);

        const response = await newPerson.save()
        console.log('data saved');
        res.status(200).json(response)
        
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
    
})

router.get('/', async (req,res) => {
    try {

        const data = await Person.find()
        console.log('Data fetched successfully');
        res.status(200).json(data)

        
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
        
        
    }
})

router.get('/:workType', async (req,res) => {
    try {

        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter'){
            const response = await Person.find({work: workType})
            console.log('response fetched successfully');
            res.status(200).json(response)
        }
        else{
            res.status(404).json({error: 'Invalid work type'});
        }  
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
     
    }
})

router.put('/:id', async (req,res) => {
    try {

        const personid = req.params.id;
        const updatedpersondata = req.body;

        const response = await Person.findByIdAndUpdate(personid, updatedpersondata, {
            new: true,
            runValidators: true
        })
        if(!response){
            return res.status(404).json({error: 'person not found'})
        }
        
            console.log('data updated successfully');
            res.status(200).json(response)
        } 
        catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
     
    }
})

router.delete('/:id', async (req,res) => {
    try {

        const personid = req.params.id;
       

        const response = await Person.findByIdAndRemove(personid)
        if(!response){
            return res.status(404).json({error: 'person not found'})
        }
        
            console.log("data deleted successfully!");
            res.status(200).json({message: 'data deleted successfully'})
        } 
        catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
     
    }
})


module.exports = router;