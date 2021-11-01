import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import TemplateContext from '../../template/TemplateProvider';
import { Button, Box, makeStyles, Hidden, Avatar, Menu, MenuItem } from '@material-ui/core';

import { LOGOUT_SUCCESS } from '../../redux/constants/authanticationConstant';

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
  },
  avator: {
    backgroundColor: 'white',
    color: '#444',
    transform: 'scale(.9)',
    marginRight: 5,
    // border: '1px solid #ffffff',
  },
  menus: {
    margin: '50px 0 0 20px',

    width: 300,
  },
}));

const HeaderButtons = () => {
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  const ctx = useContext(TemplateContext);

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
          <Hidden smDown>
            <Button className={classes.login} onClick={logoutHandler}>
              log out
            </Button>
          </Hidden>
          <Button onClick={handleClick} className={classes.userButton}>
            <Avatar
              className={classes.avator}
              src={`/img/users/${ctx?.userData?.data?.user?.photo}`}
            >
              {ctx?.userData?.data?.user?.name.charAt(0)}
            </Avatar>
            {ctx?.userData?.data?.user?.name.split(' ')[0]}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            className={classes.menus}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose} component={Link} to="/me">
              Profile
            </MenuItem>
            <Hidden mdUp>
              <MenuItem
                onClick={() => {
                  handleClose();
                  logoutHandler();
                }}
              >
                Logout
              </MenuItem>
            </Hidden>
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