require('dotenv').config();
const mongo = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT;
require('./db/mongoose');
app.use(cookieParser());
app.use(express.json());
app.use(require('./routers/router'));



app.listen(port,function(err){
    if(err){
        console.log("Error in running the server", err);
        return;
    }
    console.log("Server is running fine on port number : ", port);
})