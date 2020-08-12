const express = require("express");
const passport = require("./config/passport");
const routes = require("./routes");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3002;
const db = require("./models");
var session = require('express-session');
var path = require('path');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("./client/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const staticRoutes = require("./routes/htmlRoutes.js");
// const appRoutes = require("./routes/api-routes.js");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/", staticRoutes);
// app.use("app", appRoutes);
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());



db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
