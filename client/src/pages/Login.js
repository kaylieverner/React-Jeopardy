import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Box, Button as GrommetButton, FormField, TextInput,Grommet } from 'grommet';

// passport logic for user sign up and log in
// DB logic

function Login() {

  return (
    <Container>
    {/* <Grommet>
      <Box>
        <h2>login and sign up</h2> */}
        {/* <Box>
          <FormField label="Login">
            <TextInput placeholder="username" />
            <TextInput placeholder="password" />
          </FormField>
          <GrommetButton color="primary" label='Login' />
        </Box> */}
        {/* <Box>
          <FormField label="Sign Up">
            <TextInput placeholder="username" />
            <TextInput placeholder="password" />
          </FormField>
          <GrommetButton color="primary" label='Sign Up' />
        </Box> */}
      {/* </Box>
    </Grommet> */}
      <Row>
      <Col size="md-6">
      <Jumbotron>
          <h>Log In</h>
          <Grommet>
          <Box>
          <FormField label="">
            <TextInput placeholder="username" />
            <TextInput placeholder="password" />
          </FormField>
          <GrommetButton color="primary" label='Login' />
        </Box>
          </Grommet>
       </Jumbotron>
      </Col>

      <Col size="md-6">
      <Jumbotron>
          <h>Sign Up</h>
          <Grommet>
          <Box>
          <FormField label="">
            <TextInput placeholder="username" />
            <TextInput placeholder="password" />
          </FormField>
          <GrommetButton color="primary" label='Sign Up' />
        </Box>
          </Grommet>
       </Jumbotron>
      </Col>
      </Row>
    </Container>
  );
}


export default Login;

