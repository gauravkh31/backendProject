const express = require('express')
const db = require('./db')
const app = express();
const Person = require('./models/person');

const bodyParser = require('body-parser')
app.use(bodyParser.json());


app.get('/', (req,res) => {
    res.send('Welcome to my HOTEL, how can i help You?')
})

app.post('/person',(req,res)=>{
    const data = req.body

    const newPerson = new Person();
    newPerson.name = data.name;
    newPerson.work = data.work;
    newPerson.mobile = data.mobile;
    newPerson.email = data.email;
    newPerson.salary = data.salary;
    newPerson.age = data.age;
    newPerson.address = data.address;

})



app.listen(3000, () => {
    console.log("Server is running at port 3000");
})
