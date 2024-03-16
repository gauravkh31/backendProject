const express = require('express')
const db = require('./db')
const app = express();
const Person = require('./models/person');
const MenuItem = require('./models/menuitem');
const bodyParser = require('body-parser')
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Welcome to my HOTEL, how can i help You?')
})

app.post('/person', async (req,res)=>{


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

app.post('/menuitem', async (req,res)=>{


    try {
        const data = req.body
        const newMenuItem = new MenuItem(data);

        const response = await newMenuItem.save()
        console.log('data saved');
        res.status(200).json(response)
        
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
    
})


app.get('/person', async (req,res) => {
    try {

        const data = await Person.find()
        console.log('Data fetched successfully');
        res.status(200).json(data)

        
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
        
        
    }
})

app.get('/menuItem', async (req,res) => {
    try {

        const data = await MenuItem.find()
        console.log('Data fetched successfully');
        res.status(200).json(data)

        
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
        
        
    }
})


app.get('/person/:workType', async (req,res) => {
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


   
app.listen(3000, () => {
    console.log("Server is running at port 3000");
})
