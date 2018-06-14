"use strict";
const express = require('express');
const router = express.Router();
const path = require('path');
const request = require('request');

router.get('/trending', function(req, res, next) {
    //only take params of interested
    let qs = {
        client_id: process.env.client_id,
        client_secret: process.env.client_secret,
        near: req.query.near,
        v: 20180614
    }

    let url = `https://api.foursquare.com/v2/venues/trending`;

    request({
        url,
        method: 'GET',
        qs
    }, (err, response, body)=>{
        if (err) { response.sendStatus(500); }
        res.send(body);
    });
});

router.get('/recommended', function(req, res, next) {
    //only take params of interested
    let qs = {
        client_id: process.env.client_id,
        client_secret: process.env.client_secret,
        near: req.query.near,
        v: 20180614
    }

    let url = `https://api.foursquare.com/v2/venues/explore`;

    request({
        url,
        method: 'GET',
        qs
    }, (err, response, body)=>{
        if (err) { response.sendStatus(500); }
        res.send(body);
    });
  });

module.exports = router;
