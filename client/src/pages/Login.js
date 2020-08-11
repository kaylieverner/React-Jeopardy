import React from "react";
import { Box, Grommet } from "grommet";
import SignUpForm from "../components/SignUpForm/signUpForm";
import LoginForm from "../components/LoginForm/loginForm";

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
