import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import "../rating/rating.css"

export default function SRating() {
  const [value, setValue] = React.useState(4);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <div class = "ratingcontainer">
          <Typography component="legend">Your Rating</Typography>
          <Rating name="read-only" value={value} readOnly />
        </div>
      </Box>
    </div>
  );
}