const Router = require('express').Router();
const Hike = require('../models/Hike');

Router.get('*', async (req, res) => {
    console.log('GET request for hike data');
  
    Hike.find({})
      .then((data) => {
        console.log('Sending word data', data);
        res.json(data);
      })
      .catch((err) => {
        console.log('this is challenge', err);
        res.status(500).json(err);
      });
  });

  module.exports = Router; 