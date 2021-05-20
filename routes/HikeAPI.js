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

  Router.post('/api/hikes', async (req, res) => {
    console.log('POST request for new hike data');
    try {
      const hike = await Hike.create({
        trail: req.body.trail,
        distance: req.body.distance
      })
      console.log('inserted: ', hike);
      res.json(hike);
    } 
    catch (error) {
      res.json(error);
    }
  })

  module.exports = Router; 