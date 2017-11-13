const express = require('express'),
app = express(),
logger = require('morgan'),
config = require('./config/config'),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
router = require('./router');

mongoose.Promise = global.Promise
mongoose.connect(config.database, {useMongoClient: true});

//Startup server
const server = app.listen(config.port);//create server & set it to listen to port defined in config file
console.log('Server running on port '+config.port);

//Set middleware up
app.use(logger('dev'));//log api requests using morgan
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Enable CORS from client-side
app.use(function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });
  
  router(app);