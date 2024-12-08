const express = require('express');
const category =require("./Controllers/category.js")
/* instanceof of express.application*/
const app = express();

const cors = require('cors');

// defines the file path
require('dotenv').config({path: "./config.env"});
const port = process.env.PORT||8080;

// use middlewear

app.use(cors());
app.use(express.json());

// mongoose conn
const con = require ('./db/connection.js');

// using routes
app.use("/api",require('./Routes/route'))

// api request 
app.post("/categories",category)

con.then(db => {
    if(!db) return process.exit(1);
    //listen to http server
    app.listen(port,() => {
        console.log(`Server is running on port:http://localhost:${port}`);
    })

    app.on('error',err => console.log(`Failed to connect with HTTP server:${err}`));
}).catch(error => {
    console.log(`Connection error in db ${error}`);
});
