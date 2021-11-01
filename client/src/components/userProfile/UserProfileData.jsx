import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Typography, Grid, Divider } from '@mui/material';
import { Button, TextField, InputAdornment, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { AccountCircle } from '@mui/icons-material';

import Input from '../authantication/Input';
import TemplateContext from '../../template/TemplateProvider';
import { updateUser, updatePassword } from '../../redux/actions/authanticationAction';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#ffffff',
    paddingLeft: 70,
    [theme.breakpoints.up('md')]: {
      paddingLeft: 300,
    },
  },
  formContainer: {
    position: 'relative',
    padding: '50px 200px 130px',
    [theme.breakpoints.down('md')]: {
      padding: '50px 120px 130px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '50px 70px 130px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '50px 30px 130px',
    },
  },
  formHeading: {
    paddingBottom: 30,
    backgroundImage: 'linear-gradient(to right, #7dd56f, #28b487)',
    '-webkit-background-clip': 'text',
    color: 'transparent',
  },
  button: {
    position: 'absolute',
    bottom: 50,
    right: 208,
    [theme.breakpoints.down('md')]: {
      right: 128,
    },
    [theme.breakpoints.down('sm')]: {
      right: 78,
    },
    [theme.breakpoints.down('xs')]: {
      right: 38,
    },
    fontFamily: "'Lato', sans-serif",
    backgroundColor: '#55c57a',
    color: '#fff',
    borderRadius: 100,
    padding: '10px 30px',
    '&:hover': {
      backgroundColor: '#55c57a',
    },
    '&:focus': {
      backgroundColor: '#2e864b',
    },
  },

  avatar: {
    height: 75,
    width: 75,
    marginRight: 20,
  },
  photoInput: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const initialPasswordData = {
  passwordCurrent: '',
  password: '',
  passwordConfirm: '',
};

export default function UserProfileData() {
  const ctx = useContext(TemplateContext);

  const [passwordData, setPasswordData] = useState(initialPasswordData);
  const [userData, setUserData] = useState({
    name: ctx.userData.data.user.name,
    email: ctx.userData.data.user.email,
    photo: null,
  });
  const [image, setImage] = useState(
    ctx.userData.data.user.photo &&
      `${process.env.REACT_APP_USER_IMG_ROUTE}/${ctx?.userData?.data?.user?.photo}`
  );
  console.log(ctx.userData.data.user.photo, image);

  const [passwordType, setPasswordType] = useState('password');
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleUserChange = (e) => {
    if (e.target.name === 'photo') {
      setUserData({ ...userData, [e.target.name]: e.target.files[0] });
      setImage(URL.createObjectURL(e.target.files[0]));
    } else {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const submitUserDataHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let x in userData) {
      formData.append(x, userData[x]);
    }

    dispatch(updateUser(formData));

    ctx.userData.data.user.name = userData.name;
    ctx.setUserData({ ...ctx.userData });
  };

  const submitUpdatedPasswordHandler = (e) => {
    e.preventDefault();
    dispatch(updatePassword(passwordData));
    setPasswordData(initialPasswordData);
  };

  return (
    <Box className={classes.container}>
      <form onSubmit={submitUserDataHandler} className={classes.formContainer}>
        <Typography variant="h5" className={classes.formHeading}>
          YOUR ACCOUNT SETTINGS
        </Typography>
        <Grid container spacing={2}>
          <Input
            name="name"
            label="Your Name"
            value={userData.name}
            type="text"
            handleChange={handleUserChange}
          />
          <Input
            name="email"
            label="Your Email"
            value={userData.email}
            type="text"
            handleChange={handleUserChange}
          />
          <Grid item className={classes.photoInput}>
            <Avatar className={classes.avatar} src={image} />
            <TextField
              id="input-with-icon-textfield"
              type="file"
              name="photo"
              label="Choose new photo"
              size="medium"
              variant="standard"
              fullWidth
              onChange={handleUserChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" className={classes.button}>
          save settings
        </Button>
      </form>
      <Divider />
      <form onSubmit={submitUpdatedPasswordHandler} className={classes.formContainer}>
        <Typography variant="h5" className={classes.formHeading}>
          PASSWORD CHANGE
        </Typography>
        <Grid container spacing={2}>
          <Input
            name="passwordCurrent"
            label="Current password"
            value={userData.currentPassword}
            type="password"
            handleChange={handlePasswordChange}
          />
          <Input
            name="password"
            label="Password"
            value={userData.password}
            type={passwordType}
            setPasswordType={setPasswordType}
            handleChange={handlePasswordChange}
          />

          <Input
            name="passwordConfirm"
            label="Confirm Password"
            value={userData.passwordConfirm}
            type="password"
            handleChange={handlePasswordChange}
          />
        </Grid>
        <Button type="submit" variant="contained" className={classes.button}>
          save password
        </Button>
      </form>
    </Box>
  );
}
