const path=require('path')
const express=require('express');
const app=express();
const track=require('./routes/trackRoutes');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));



app.use(track);


app.listen(3000,()=>{
    console.log("server is listening at port 3000")
})