// Requiring our models and passport as we've configured it
var passport = require('../config/passport');
var db = require('../models/');

module.exports = function (app) {

  //POST ROUTES//

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error



  //Login in User//


  app.post('/api/loginuser', passport.authenticate('local'), function (req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });


//Sign up user//
  app.post('/api/signupuser', function (req, res) {
    db.User.create({
      userName: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
      .then(function (user) {
        console.log(user)
        req.login(user, function (err) {
          if (err) {
            return next(err)
          }
          user.password = undefined;
          res.json(user);
        });

      })
      .catch(function (err) {
        console.log(err)
        res.status(401).json(err);
      });
  });
};
