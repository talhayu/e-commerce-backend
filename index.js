const express = require('express');
const mongoose = require("mongoose");
require('dotenv').config()

const app = express();

app.use(express.json())
const port = process.env.PORT;


mongoose.connect( 'mongodb+srv://hassan:talha@cluster0.dqbwejy.mongodb.net/ecommerce');
const database = mongoose.connection;
database.on('error',(err)=>{
    console.log(`err ${err}`)
})
database.once('connected',()=>{
    console.log('database is connected')
})

app.listen(port, ()=>{
    console.log(`server is listening on port ${port} `)
})