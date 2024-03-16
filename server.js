const express = require('express')
const db = require('./db')
const app = express();
const Person = require('./models/person');
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

   
app.listen(3000, () => {
    console.log("Server is running at port 3000");
})
