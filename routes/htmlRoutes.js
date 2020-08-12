var express = require('express');
var router = express.Router();
var path =require('path');
var isAuthenticated = require("../config/middleware/isAuthenticated");

//Gets homepage
router.get('/', function(req,res,next){
  res.render('index.ejs', {root: __dirname});
});


//gets react app
router.get('/app', isAuthenticated, function(req, res, next) {
  res.sendFile(path.join(__dirname, '../client/public', 'index.html'));
 });



// module.exports = function(app) {

//   app.get("/", function(req, res) {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../public/signup.html"));
//   });

//   app.get("/login", function(req, res) {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../public/login.html"));
//   });

 
// };

//  /* GET React App */
// router.get(['/app', '/app/*'], function(req, res, next) {
//  res.sendFile(path.join(__dirname, '../public', 'app.html'));
// });

module.exports = router;