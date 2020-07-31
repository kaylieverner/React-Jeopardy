import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import {
  Box,
  Button as GrommetButton,
  FormField,
  TextInput,
  Grommet,
} from "grommet";

// passport logic for user sign up and log in
// DB logic

// function to perform post route to api/signupuser

function signUpUser(email, password) {
  $.post("/api/signupuser", {
    email: email,
    password: password,
  })

    .then(function (data) {
      console.log(data);
      window.location.replace("/login");
    })
    .catch(function (err) {
      console.log(err);
    });
}

//function to perform post route  to api/loginuser
function loginUser(email, password) {
  $.post("/api/loginuser", {
    email: email,
    password: password,
  })
    .then(function () {
      window.location.replace("/app");
      // If there's an error, log the error
    })
    .catch(function (err) {
      console.log(err);
    });
}

function Login() {
  return (
    <Grommet>
      <Box>
        <h2>login and sign up</h2>
        <Box>
          <FormField label="Login">
            <TextInput placeholder="username" />
            <TextInput placeholder="password" />
          </FormField>
          <GrommetButton color="primary" label="Login" />
        </Box>
        <Box>
          <FormField label="Sign Up">
            <TextInput placeholder="username" />
            <TextInput placeholder="password" />
          </FormField>
          <GrommetButton color="primary" label="Sign Up" />
        </Box>
      </Box>
    </Grommet>
  );
}

export default Login;
