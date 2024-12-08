const mongoose = require('mongoose');

const conn = mongoose.connect(process.env.ALTAS_URI)
// return peomise
 
    .then(db=> {
        console.log("Database Connected");
        return db;
    }).catch(err => {
        console.log("connection lost",err);
    });

    module.exports =conn;   