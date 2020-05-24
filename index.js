const express = require('express');
const path=require('path');
const app = express();
const multer = require('multer');
const bodyParser = require('body-parser');

const port=8000;/** On port 80 all website hosts */
/*app listen to the port*/
const fs=require('fs');

const db=require('./config/mongoose');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.urlencoded());

//makes the uploads paths available to the browser
app.use('/uploads',express.static(__dirname+'/uploads'));
app.use(express.static('assets'));


//use express router
app.use('/',require('./routes'));

//set up view engine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){
        console.log('Error: ',err);
        /*interpolition
        console.log(`Error in running : ${err}`);
        */
    }
    console.log(`server is running on port${port}`);
});