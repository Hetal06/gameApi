let express = require('express'),
      app = express(),
      port = process.env.PORT || 4000,
      mongoose = require('mongoose'),
      Registrations = require('./support/models/registerModel'), //created model loading here
      Spins = require('./support/models/spinModel'),
      Coins = require('./support/models/coinModel'),
      videos = require('./support/models/videoModel'),
      bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Ludo');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let regRoutes = require('./support/routes/registerRoutes'); //importing route
let spinRoutes = require('./support/routes/spinRoutes'); //importing route
let coinRoutes = require('./support/routes/coinRoutes'); //importing route
let videoRoutes = require('./support/routes/videoRoutes'); //importing route
regRoutes(app); //register the route
spinRoutes(app);
coinRoutes(app);
videoRoutes(app);

app.get('/', (req, res) => {
    res.json({"message": "Welcome to LudoGame application."});
});

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);


console.log('register list RESTful API server started on: ' + port);
