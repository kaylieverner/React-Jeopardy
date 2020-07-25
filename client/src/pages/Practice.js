import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Box, Grommet } from 'grommet';
import QuestionCard from "../components/QuestionCard/QuestionCard"

//practice game
//single question card that serves a random question 


function Practice() {
  return (
    <Grommet>
    <Box>
      <h1>Practice</h1>
      <QuestionCard></QuestionCard>
    </Box>
    </Grommet>
  );
}

export default Practice;