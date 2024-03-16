const express = require('express')
const db = require('./db')
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Welcome to my HOTEL, how can i help You?')
})

const personroutes = require('./routes/personroutes')
app.use('/person', personroutes)

const menuitemroutes = require('./routes/menuitemroutes')
app.use('/menuitem', menuitemroutes)

  
app.listen(3000, () => {
    console.log("Server is running at port 3000");
})
