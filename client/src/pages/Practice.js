import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Box, Grommet } from 'grommet';
import QuestionCard from "../components/QuestionCard/QuestionCard"

//practice game
//single question card that serves a random question 

// function Practice() {
//   return (
//     <Grommet>
//     <Box>
//       <h1>Practice</h1>
//       <QuestionCard> </QuestionCard>
//     </Box>
//     </Grommet>
//   );
// }

import { Button } from 'reactstrap';

    const styles = {
      card: {
        margin: 60,
        background: "#e8eaf6",
        minHeight: 150,
        width: 600
        
      },
      heading: {
        background: "salmon",
        minHeight: 30,
        lineHeight: 2.5,
        fontSize: "1.2rem",
        color: "white",
        padding: "0 20px"
      },
      content: {
        padding: 50
      },
      
    };
    
    function Practice() {
      return (
        <div style={styles.card}>
          <div style={styles.heading}>Practice Questions!</div>
          <div style={styles.content}>
            Question
          </div>
          <div> <Button color="secondary">Answer</Button> </div>
          <div> <Button color="secondary">Next Question</Button> </div>
        </div>
      );
    }


export default Practice;

