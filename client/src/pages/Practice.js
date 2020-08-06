import React from "react";
import { Box, Grommet } from 'grommet';
import QuestionCard from "../components/QuestionCard/QuestionCard"
import PracticeCard from "../components/PracticeCard/PracticeCard";
import { Button } from 'react-bootstrap';

//practice game
//single question card that serves a random question 


function Practice() {
  return (
    <Grommet>
    <Box>
      <h1>Practice</h1>
      <PracticeCard></PracticeCard>
      <Button color="primary"> Show Answer</Button>
      <Button color="primary">Next Question</Button> 
    </Box>
    </Grommet>
  );
}

export default Practice;