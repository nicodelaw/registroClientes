const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const mysql = require('mysql');
require('dotenv').config({ path: path.join(__dirname, './.env') });
const myConnection = require('express-myconnection');

// routes required
const customerRoutes = require ('./routes/customer');
const { urlencoded } = require('express');

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares

app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
}, 'single'));

app.use(express.urlencoded({ extended: false }));

//routes

app.use('/', customerRoutes);

//static files 
app.use(express.static(path.join(__dirname, 'public')));

//starting

app.listen(app.get('port'), ()=>{
    console.log(`escuchando el puerto ${app.get('port')}`)
})