"use strict";
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let session = require('express-session');
let helmet = require('helmet');

//routes
let home = require('./routes/index.js');
let foursquare = require('./routes/foursquare.js');

let app = express();

//security headers
app.use(helmet({
    hsts: {
        force: true,
        maxAge: 604800, //7 days
        preload: true
    }
}));

app.use(function (req, res, next) {
    res.header("X-powered-by", "Blood, sweat, and tears");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist')));

//allow CORS requests
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

//serve
app.use('/', home);
app.use('/api/foursquare', foursquare);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.send(err.message);
});

module.exports = app;
