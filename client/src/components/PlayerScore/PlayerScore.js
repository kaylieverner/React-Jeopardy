import React from "react";
import {Box, TextInput, Heading} from 'grommet';

function PlayerScore(props) {
  return (
    <div>
        <Box direction="row-responsive" gap="small">
            <TextInput placeholder="Name"/>
        </Box>
        <Box direction="row-responsive" gap="small">
            <Heading margin="large">{props.playersScores[0].score}</Heading>
        </Box>
    </div>
  );
}

export default PlayerScore;