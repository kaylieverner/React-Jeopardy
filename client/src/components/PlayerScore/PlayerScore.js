import React from "react";
import {Box, TextInput, Heading} from 'grommet';

function PlayerScore(props) {
  console.log(props);

  return (
    <div>
        <Box direction="row-responsive" gap="small">
            <TextInput placeholder="Name" onChange={event => {
              props.updateName(event.target.value, props.index)
            }}/>
        </Box>
        <Box direction="row-responsive" gap="small">
            <Heading margin="large">{props.player[props.index].score}</Heading>
        </Box>
    </div>
  );
}

export default PlayerScore;