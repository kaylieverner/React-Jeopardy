import React from "react";
import { Box, Grommet } from "grommet";
import SignUpForm from "../components/SignUpForm/signUpForm";

function Login() {
  return (
    <Grommet>
      <Box>
        <h2>Signup</h2>
        <Box>
          <SignUpForm></SignUpForm>
        </Box>
      </Box>
    </Grommet>
  );
}

export default Login;
