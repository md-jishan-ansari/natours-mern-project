import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Grid, Paper, Box, Typography, Button } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';

import Input from './Input';
import useStyles from './style.js';
import { resetPassword } from '../../redux/actions/authanticationAction.js';

const initialValue = { password: '', passwordConfirm: '' };

const ResetPassword = () => {
  const classes = useStyles();
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  //   const isForgotPassword = params.isSignup === 'forgotPassword';
  const token = params.token;

  const [userData, setUserData] = useState(initialValue);
  const [passwordType, setPasswordType] = useState('password');

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(token, userData, history));

    setUserData(initialValue);
  };

  return (
    <Box style={{ backgroundColor: '#f7f7f7', padding: '60px 0px' }}>
      <Paper component={Box} className={classes.authContainer}>
        <Box className={classes.authHeader}>
          <Box className={classes.authLogo}>
            <LockOutlined fontSize="medium" />
          </Box>
          <Typography variant="h5">Reset Password</Typography>
        </Box>

        <form onSubmit={submitHandler} className={classes.formContainer}>
          <Grid container spacing={2}>
            <Input
              name="password"
              label="New Password"
              value={userData.password}
              type={passwordType}
              setPasswordType={setPasswordType}
              handleChange={handleChange}
            />

            <Input
              name="passwordConfirm"
              label="Confirm Password"
              value={userData.passwordConfirm}
              type="password"
              handleChange={handleChange}
            />
          </Grid>

          <Button type="submit" fullWidth variant="contained" color="primary">
            Reset Password
          </Button>

          <Button className={classes.switchButton} onClick={() => history.push('/auth/login')}>
            Back to login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default ResetPassword;
