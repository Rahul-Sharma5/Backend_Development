const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// ! Connected Routes File //
const userRouter = require('./api/routes/user');
const astroRouter = require('./api/routes/astrodata');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

// ! Router Part Start //
app.use('/',userRouter)
app.use('/user',astroRouter)
// ! Router Part End //



// ! Window Message
app.get('/', (req, res) =>{
    res.send("This is Backend Server");
 });

// ! Error Handling for Bad Url //
app.use((req,res,next)=>{
    res.status(404).json({
        message: 'Page not found'
    })
})
// ! Error Handling for Bad Url end //

module.exports = app;