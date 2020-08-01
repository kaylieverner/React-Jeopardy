import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Box, FormField, TextInput,Grommet } from 'grommet';
import { Button } from 'reactstrap';

import LoginCard from "../components/loginCard/LoginCard"

import SignupCard from "../components/SignupCard/SignupCard"

// passport logic for user sign up and log in
// DB logic

function Login() {
  return (
    <Container>
      <Row>
      <Col size="md-6">
      <Grommet>
        <Box><LoginCard> </LoginCard></Box> 
        </Grommet>
      </Col>
      <Col size = "md-6">
      <Grommet>
        <Box><SignupCard> </SignupCard></Box> 
        </Grommet>
        {/* <Button color="primary"> Sign up </Button> */}
      </Col>
      </Row>
    </Container>
  );
}


export default Login;

