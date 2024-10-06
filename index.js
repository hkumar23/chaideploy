require('dotenv').config()
const express = require('express')//Importing express
// import express from 'express' //can also do like this
const app = express()
const port="3000"
app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/site',(req,res)=>{
    res.send('harshkumardotcom')
})

app.get('/login',(req,res)=>{
    res.send("Please login to Baniya Buddy")
})

app.get('/bb', (req,res)=>{
    res.send("<h1>Successfully Logged in to baniya buddy</h1>")
})

app.listen(process.env.port,()=>{
    console.log(`Chaibackend listening on port: ${process.env.port}`)
})
