const express = require("express");
const passport = require('./config/passport');
const routes = require("./routes");
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const db = require('./models');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);


// We need to use sessions to keep track of our user's login status
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Start the API server
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
  });
});
