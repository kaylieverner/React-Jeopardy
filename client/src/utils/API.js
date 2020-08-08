import axios from "axios";
var passport = require("../config/passport");
const db = require("../models");

export default {
  loginUser: () => {
    return axios.post(
      "/api/loginuser",
      passport.authenticate("local"),
      (req, res) => {
        res.json({
          email: req.user.email,
          passord: req.uesr.password,
        });
      }
    );
  },

  signUpUser: () => {
    return axios.post("/api/signupuser", (req, res) => {
      db.User.create({
        email: req.body.email,
        password: req.body.password,
      })
        .then(function (user) {
          req.login(user, function (err) {
            if (err) {
              return next(err);
            }
            user.password = undefined;
            res.json(user);
          });
        })
        .catch(function (err) {
          console.log(err);
          res.status(401).json(err);
        });
    });
  },
};
