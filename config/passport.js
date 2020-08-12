var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var db = require('../models');

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
  new LocalStrategy({usernameField:"email"},function(username, password, done) {
    console.log(username);
    db.User.findOne({ username: username })
    .then(function(user) {
      console.log(username);
      return done(null, user);
    })
    .catch(function(err){
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
    })    
  }
  ));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});
// Exporting our configured passport
module.exports = passport;


