import React from "react";
import { Box, FormField, TextInput,Grommet } from 'grommet';
import { Container, Button } from "reactstrap";

const styles = {
    jumbotron: {
      margin: 30,
      background: "#e8eaf6",
      minHeight: 250,
      width: 250
    }
}

function SignupCard (){
  return (
  <Container>
      <div  className="jumbotron" style = {styles.jumbotron}>
        <h3> Sign Up </h3>
      <Grommet>
          <Box>
          <FormField label="">
            <TextInput placeholder="username" />
            <TextInput placeholder="password" />
          </FormField>
           </Box>
          </Grommet>
          <Button color="primary"> Sign up </Button>
       </div> 
  </Container>      
  )}

  export default SignupCard;