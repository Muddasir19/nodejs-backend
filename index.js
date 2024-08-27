const express = require('express')
require('dotenv').config()

const app = express()

const port = process.env.PORT

app.get('/',(req,res)=>{
    res.send("test project for backend")
})
app.get('/login',(req,res)=>{
    res.send("login for backend")
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
    
})