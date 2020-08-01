import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import { Box, Grommet } from "grommet";
import SignUpForm from "../components/signUpForm";
import LoginForm from "../components/loginForm";

function Login() {
  return (
    <Grommet>
      <Box>
        <h2>Login</h2>
        <Box>
          <LoginForm></LoginForm>
        </Box>
        <h2>Signup</h2>
        <Box>
          <SignUpForm></SignUpForm>
        </Box>
      </Box>
    </Grommet>
  );
}

export default Login;
