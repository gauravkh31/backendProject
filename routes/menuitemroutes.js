const express = require('express')
const router = express.Router();
const menuitem = require('./../models/menuitem');

router.post('/', async (req,res)=>{


    try {
        const data = req.body
        const newMenuItem = new menuitem(data);

        const response = await newMenuItem.save()
        console.log('data saved');
        res.status(200).json(response)
        
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
    
})

router.get('/', async (req,res) => {
    try {

        const data = await menuitem.find()
        console.log('Data fetched successfully');
        res.status(200).json(data)

        
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
        
        
    }
})

router.get('/:tasteType', async (req,res) => {
    try {

        const tasteType = req.params.tasteType;
        if (tasteType == 'Spicy' || tasteType == 'Sweet' || tasteType == 'Sour'){
            const response = await menuitem.find({taste: tasteType})
            console.log('response fetched successfully');
            res.status(200).json(response)
        }
        else{
            res.status(404).json({error: 'Invalid taste type'});
        }  
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
     
    }
})

module.exports = router;