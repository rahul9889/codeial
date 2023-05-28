const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

const db = require('./config/mongoose');


app.use(express.urlencoded({extended: true}));
app.use(express.json())


// const expressLayouts = require('express-ejs-layouts');
// app.use(expressLayouts)


app.use('/',require('./routes'));
app.use(cookieParser());


// set up the view engine
app.set('view engine','ejs');
app.set('views','./views');










app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server:${err}`);
    }
    console.log(`Server is running on port${port}`);
});
