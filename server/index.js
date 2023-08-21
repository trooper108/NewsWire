const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('DataBase is Connectd');
})
.catch((err)=>{
    console.log(err)
})

app.get('/',(req,res)=>{
    res.send('work');
});

app.use(express.json())
const newsRoutes = require('./routes/news');
app.use(newsRoutes);


const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server started ${port}`);
});