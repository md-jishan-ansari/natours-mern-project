import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import TemplateContext from '../../template/TemplateProvider';
import {
  Button,
  Box,
  makeStyles,
  Hidden,
  Avatar,
  Menu,
  MenuItem,
} from '@material-ui/core';

import { LOGOUT_SUCCESS } from '../../redux/constants/authanticationConstant';

import variable from '../../config.js';
const { DB_ROUTE } = variable;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginLeft: 'auto',
    fontFamily: 'inherit',
    fontWeight: '400',
  },
  login: {
    borderRadius: 25,
    padding: '10px 30px',
    color: '#f7f7f7',
    fontFamily: 'inherit',
    fontWeight: 400,
  },
  signup: {
    backgroundColor: '#444',
    color: '#f7f7f7',
    border: '1px solid #fff',
    borderRadius: 25,
    padding: '10px 30px',
    marginLeft: 5,
    fontFamily: 'inherit',
    fontWeight: 'lighter',
    '&:hover': {
      color: 'black',
      backgroundColor: 'white',
    },
  },
  userButton: {
    borderRadius: 25,
    color: '#f7f7f7',
    fontFamily: 'inherit',
    padding: '5px 20px',
    [theme.breakpoints.down('sm')]: {
      padding: '5px 5px',
    },
  },
  avator: {
    backgroundColor: 'white',
    color: '#444',
    transform: 'scale(.9)',
    marginRight: 5,
    // border: '1px solid #ffffff',
  },
  menu: {
    marginTop: 60,
    transform: 'translateX(-10px)',
  },
}));

const HeaderButtons = () => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();

  const ctx = useContext(TemplateContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickHandler = (isSignup) => {
    if (isSignup) history.push('/auth/signup');
    else history.push('/auth/login');
  };

  const logoutHandler = () => {
    dispatch({ type: LOGOUT_SUCCESS });
    ctx.setUserData('');
  };

  return (
    <Box className={classes.wrapper}>
      {ctx.userData ? (
        <>
          <Hidden xsDown>
            <Button className={classes.login} onClick={logoutHandler}>
              log out
            </Button>
            <Button component={Link} to="/me" className={classes.userButton}>
              <Avatar
                className={classes.avator}
                src={`${DB_ROUTE}/img/users/${ctx?.userData?.data?.user?.photo}`}
              >
                {ctx?.userData?.data?.user?.name.charAt(0)}
              </Avatar>
              {ctx?.userData?.data?.user?.name.split(' ')[0]}
            </Button>
          </Hidden>
          <Hidden smUp>
            <Button onClick={handleClick} className={classes.userButton}>
              <Avatar
                className={classes.avator}
                src={`${DB_ROUTE}/img/users/${ctx?.userData?.data?.user?.photo}`}
              >
                {ctx?.userData?.data?.user?.name.charAt(0)}
              </Avatar>
            </Button>
          </Hidden>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            className={classes.menu}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                history.push('/me');
              }}
            >
              My Account
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                logoutHandler();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : (
        <>
          <Button className={classes.login} onClick={() => clickHandler(false)}>
            sign in
          </Button>
          <Hidden smDown>
            <Button
              variant="contained"
              className={classes.signup}
              onClick={() => clickHandler(true)}
            >
              Sign Up
            </Button>
          </Hidden>
        </>
      )}
    </Box>
  );
};

export default HeaderButtons;
