// console.log("Jaydeep Debnath");
require('dotenv').config()

const express = require ('express') 
// import express from "express"   // line no 3 and line 4 are same. its a different approch 
const app = express()
const port = 3000   // this port is a virtual port

app.get('/',(req,res)=>{
    res.send('Hello world!')
})

app.get('/twiter',(req,res)=>{
    res.send('Jaydeep Debnath')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at my server</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Go to youtube page</h2>')
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})

//  npm stop button control + c

