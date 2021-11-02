import React, { useContext, useEffect } from 'react';
import TemplateContext from '../../template/TemplateProvider';
import { useLocation } from 'react-router-dom';

import { Box, AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import HeaderButtons from './HeaderButtons';

const useStyles = makeStyles((theme) => ({
  navbar: {
    position: 'relative',
    display: 'flex',
    backgroundColor: '#444',
    color: '#f7f7f7',
    height: theme.spacing(10),
    justifyContent: 'center',
    padding: '0px 30px',
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      padding: '0px 10px',
    },
  },
  navLogo: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    height: 35,
  },
  heading: {
    color: 'white',
    transition: 'all 0.2s ease-out',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 1rem 2rem rgba(0, 0, 0, 0.15)',
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const ctx = useContext(TemplateContext);
  const location = useLocation();

  useEffect(() => {
    ctx.setUserData(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.navbar}>
      <Toolbar>
        <Link to="/" className={classes.heading}>
          ALL TOURS
        </Link>
        <Box className={classes.navLogo}>
          <img src="/img/logo-white.png" alt="Natours logo" />
        </Box>
        <HeaderButtons />
      </Toolbar>

      <ToastContainer />
    </AppBar>
  );
};

export default Header;
