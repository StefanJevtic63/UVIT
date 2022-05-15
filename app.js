const express = require('express');
const path = require('path');
const studentRoutes = require('./routes/student');

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended : true}));

app.set('view engine', 'ejs');
app.set('views', 'views/');

app.use(studentRoutes);

app.use(function(err, req, res, next){
     console.log('Greska na serveru');
     console.log(err);
     res.status(500).sendFile(path.join(__dirname, "public", "greska.html"));
 });

module.exports = app;
