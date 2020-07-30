import React from "react";
import { Col, Row, } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Box, Grommet, } from 'grommet';
//import Grid from "../components/Grid";
import { Table, Container } from 'reactstrap';

//log of high scores from available users 
//api routes to get and post score data the user enters 

const Board = (props) => {
  return (
    <Container>

    <Grommet>
    <Box>
      <h3>Top 5!</h3>
    </Box>
   </Grommet>

    <Row>
       <Col size="md-12">
        <Jumbotron>
          <h1>Leaderboard</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
         </Jumbotron>
        </Col>
     </Row>

    <Table responsive>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </Table>
    </Container>
  );
}

export default Board;
