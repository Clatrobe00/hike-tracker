var mongoose = require('mongoose');
var Hike = require('../models/Hike');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hikes', {
  useNewUrlParser: true,
});

var hikeSeed = [
  {
    name: 'Fiery Gizzard',
    distance: 3,
    date: new Date(Date.now()),
  },
];
Hike.deleteMany({})
  .then(
    Hike.collection.insertMany(hikeSeed).then((data) => {
      console.log(data.result.n + ' records inserted!');
      process.exit(0);
    })
  )
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });