const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

var db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client/public"))

require("./routes/api-routes.js")(app);
console.log(require("./routes/api-routes.js"))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactjeopardy");

// // Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
