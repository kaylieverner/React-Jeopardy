// routes to get and post score data for current game 
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the scores
  app.get("/api/playersScores", function(req, res) {
    db.Scores.findAll()
    .then(function(dbPost) {
        res.json(dbPost);
      });
  });


  // POST route for saving a new score
  app.post("/api/playersScores", function(req, res) {
    db.Scores.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });


};