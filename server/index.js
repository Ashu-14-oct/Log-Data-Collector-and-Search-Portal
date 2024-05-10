require('dotenv').config();
const express = require('express');
const PORT = 3000;
const app = express();
const cors = require('cors');
const mongodb = require('./config/mongoose');

app.use(express.json());
app.use(cors());

// routing
app.use('/', require('./router'));

// listening
app.listen(PORT, (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(`server running on PORT ${PORT}`);
});