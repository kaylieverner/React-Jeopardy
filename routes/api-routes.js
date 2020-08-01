// Requiring our models and passport as we've configured it
var passport = require('../config/passport');

// var passportWorker = require('../config/passportWorker');
var db = require('../models/');

module.exports = function (app) {

  //POST ROUTES//

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post('/api/loginuser', passport.authenticate('user'), function (req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      username: req.user.username,
      id: req.user.id
    });
  });

};