import React, { useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Grid, Paper, Box, Typography, Button } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';

import Input from './Input';
import useStyles from './style.js';
import { login, signup, forgotPassword } from '../../redux/actions/authanticationAction.js';

const initialValue = { name: '', email: '', password: '', passwordConfirm: '' };

const Auth = () => {
  const classes = useStyles();
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const isSignup = params.isSignup === 'signup';
  const isForgotPassword = params.isSignup === 'forgotPassword';

  const [userData, setUserData] = useState(initialValue);
  const [passwordType, setPasswordType] = useState('password');

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (isForgotPassword) {
      console.log(userData.email);
      dispatch(forgotPassword(userData.email));
    } else {
      if (isSignup) dispatch(signup(userData, history));
      else dispatch(login(userData, history));
    }

    setUserData(initialValue);
  };

  const switchHandler = () => {
    if (isForgotPassword) history.push('/auth/login');
    else history.push(`/auth/${isSignup ? 'login' : 'signup'}`);
    setUserData(initialValue);
    setPasswordType('password');
  };

  return (
    <Box style={{ backgroundColor: '#f7f7f7', padding: '60px 0px' }}>
      <Paper component={Box} className={classes.authContainer}>
        <Box className={classes.authHeader}>
          <Box className={classes.authLogo}>
            <LockOutlined fontSize="medium" />
          </Box>
          <Typography variant="h5">
            {isForgotPassword ? 'Forgot Password' : isSignup ? 'Sign up' : 'Sign in'}
          </Typography>
          {isForgotPassword && (
            <Typography variant="body2" style={{ textAlign: 'center', margin: '10px 20px 0' }}>
              Enter your email we wil send you an email with instructions to reset your password
            </Typography>
          )}
        </Box>

        <form onSubmit={submitHandler} className={classes.formContainer}>
          <Grid container spacing={2}>
            {isSignup && (
              <Input
                name="name"
                label="Your Name"
                value={userData.name}
                type="text"
                handleChange={handleChange}
              />
            )}
            <Input
              name="email"
              label="Email"
              value={userData.email}
              type="email"
              handleChange={handleChange}
            />
            {!isForgotPassword && (
              <Input
                name="password"
                label="Password"
                value={userData.password}
                type={passwordType}
                setPasswordType={setPasswordType}
                handleChange={handleChange}
              />
            )}

            {isSignup && (
              <Input
                name="passwordConfirm"
                label="Confirm Password"
                value={userData.passwordConfirm}
                type="password"
                handleChange={handleChange}
              />
            )}
          </Grid>
          {!isSignup && !isForgotPassword && (
            <Box className={classes.link}>
              <Link to="/auth/forgotPassword">Forgot Password</Link>
            </Box>
          )}
          <Button type="submit" fullWidth variant="contained" color="primary">
            {isForgotPassword ? 'Send Reset Link' : isSignup ? 'Sign up' : 'sign in'}
          </Button>

          <Button className={classes.switchButton} onClick={switchHandler}>
            {isForgotPassword
              ? 'Back to login'
              : isSignup
              ? 'Already have an account? Sign In'
              : "don't Have an account? sign up"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Auth;
