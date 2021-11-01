import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  errorContainer: {
    height: '55vh',
    textAlign: 'center',
    padding: '40px 20px',
  },
  headingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    width: '500px',
    '-webkit-background-clip': 'text',
    color: 'transparent',
    backgroundImage: 'linear-gradient(to right, #ff7730, #eb4d4b)',
    fontSize: '2.5rem',
  },
  imoji: {
    fontSize: '2.2rem',
  },
  message: {
    marginTop: '30px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
}));

const Error = ({ message }) => {
  const classes = useStyles();
  return (
    <Box className={classes.errorContainer}>
      <Box className={classes.headingContainer}>
        <Typography variant="h5" className={classes.heading}>
          UH OH! SOMETHING WENT WRONG!
        </Typography>
        <Typography className={classes.imoji}>
          😥
          <br />
          🤯
        </Typography>
      </Box>
      <Typography variant="body1" className={classes.message}>
        {message}
      </Typography>
    </Box>
  );
};

export default Error;
