import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Box, Grommet } from 'grommet';
import QuestionCard from "../components/QuestionCard/QuestionCard"
import { Button } from 'reactstrap';  

//practice game
//single question card that serves a random question 
 
    function Practice() {
      return (
     <Container>
       <Row>
        <Col size="md-10"> 
        <Grommet>
        <Box><QuestionCard> </QuestionCard></Box> 
        </Grommet>
        </Col>
       </Row>
       <Row> 
        <Col size = "md-7"></Col>
        <Col size = "md-5">
        <Button color="primary"> Show Answer</Button>
        <Button color="primary">Next Question</Button> 
        </Col>
       </Row>   
     </Container>
    );
  }

export default Practice;

