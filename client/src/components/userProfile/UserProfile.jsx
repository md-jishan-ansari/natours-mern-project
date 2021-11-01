import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import { Box, List, Typography, Divider, IconButton, Hidden } from '@mui/material';

import { makeStyles } from '@material-ui/core';

import MuiDrawer from '@mui/material/Drawer';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

import MultilineChartIcon from '@mui/icons-material/MultilineChart';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import ListItemComponent from './ListItemComponent';
import UserProfileData from './UserProfileData';
import TemplateContext from '../../template/TemplateProvider';

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  //   position: 'absolute',
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  //   position: 'absolute',
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
  [theme.breakpoints.up('md')]: {
    width: 300,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': {
        ...openedMixin(theme),
        position: 'absolute',
        backgroundImage: 'linear-gradient(to right bottom, #7dd56f, #28b487)',
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': {
        ...closedMixin(theme),
        position: 'absolute',
        backgroundImage: 'linear-gradient(to right bottom, #7dd56f, #28b487)',
      },
    }),
  })
);

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    margin: '80px 140px',
    [theme.breakpoints.down('md')]: {
      margin: '80px 50px',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '50px 20px',
    },
  },
  mainContainer: {
    backgroundColor: '#ffffff',
  },
}));

const UserProfile = () => {
  const history = useHistory();
  const ctx = useContext(TemplateContext);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(1);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (!ctx?.userData) {
    history.push('/');
  }

  return (
    ctx?.userData && (
      <Box className={classes.container}>
        <Box sx={{ display: 'flex' }}>
          <Drawer variant="permanent" open={open}>
            <Hidden mdUp>
              <DrawerHeader>
                {!open ? (
                  <IconButton
                    color="inherit"
                    onClick={handleDrawerOpen}
                    edge="end"
                    sx={{
                      color: '#ffffff',
                      marginRight: '14px',
                      [theme.breakpoints.down('sm')]: {
                        marginRight: '0px',
                      },
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={handleDrawerClose} style={{ color: 'white' }}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                  </IconButton>
                )}
              </DrawerHeader>
              <Divider />
            </Hidden>
            <Hidden mdDown>
              <Box style={{ height: 40 }}></Box>
            </Hidden>

            <List>
              <ListItemComponent
                icon={<SettingsOutlinedIcon />}
                text="SETTINGS"
                currentIndex={index}
                setIndex={setIndex}
                index={1}
              />
              <ListItemComponent
                icon={<ShoppingBagOutlinedIcon />}
                text="MY BOOKINGS"
                currentIndex={index}
                setIndex={setIndex}
                index={2}
              />
              <ListItemComponent
                icon={<StarBorderOutlinedIcon />}
                text="MY REVIEWS"
                currentIndex={index}
                setIndex={setIndex}
                index={3}
              />
              <ListItemComponent
                icon={<AccountBalanceWalletOutlinedIcon />}
                text="BILLING"
                currentIndex={index}
                setIndex={setIndex}
                index={4}
              />
            </List>
            {ctx.userData.data.user.role === 'admin' && (
              <>
                <Typography style={{ margin: '30px 0 0 10px', color: '#ffffff' }}>ADMIN</Typography>
                <Divider />
                <List>
                  <ListItemComponent
                    icon={<MultilineChartIcon />}
                    text="MANAGE TOURS"
                    currentIndex={index}
                    setIndex={setIndex}
                    index={5}
                  />
                  <ListItemComponent
                    icon={<PeopleAltOutlinedIcon />}
                    text="MANAGE USERS"
                    currentIndex={index}
                    setIndex={setIndex}
                    index={6}
                  />
                  <ListItemComponent
                    icon={<StarBorderOutlinedIcon />}
                    text="MANAGE REVIEWS"
                    currentIndex={index}
                    setIndex={setIndex}
                    index={7}
                  />
                  <ListItemComponent
                    icon={<ShoppingBagOutlinedIcon />}
                    text="MANAGE BOOKINGS"
                    currentIndex={index}
                    setIndex={setIndex}
                    index={8}
                  />
                </List>
              </>
            )}
          </Drawer>
          <UserProfileData />
        </Box>
      </Box>
    )
  );
};

export default UserProfile;
