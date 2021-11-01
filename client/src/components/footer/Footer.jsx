import { AppBar, Toolbar, Typography, Box, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#f7f7f7',
    padding: '40px 30px 30px 30px',
  },
  footerContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      justifyContent: 'center',
    },
  },
  footerItem: {
    display: 'flex',
    flexFlow: 'column wrap',
    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
    },
  },
  footerImage: {
    height: 36,
  },
  list: {
    display: 'flex',
    flexFlow: 'row wrap',
    listStyle: 'none',

    '&>*': {
      padding: '0 10px',
      margin: 5,
      '&>*': {
        textDecoration: 'none',
        color: '#777',
        fontSize: 13,
        padding: 0,
        margin: 0,
      },
      '&>*:hover': {
        color: '#55c57a',
      },
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  footerCopyright: {
    margin: '0 0 0 auto',
    color: '#999',
    fontSize: 13,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.footer}>
      <Toolbar className={classes.footerContainer}>
        <Box>
          <img src="/img/logo-green.png" alt="Natour logo" className={classes.footerImage} />
        </Box>
        <Box className={classes.footerItem}>
          <li className={classes.list}>
            <ul>
              <Link to="#">About us</Link>
            </ul>
            <ul>
              <Link to="#">Download apps</Link>
            </ul>
            <ul>
              <Link to="#">Become a guide</Link>
            </ul>
            <ul>
              <Link to="#">Careers</Link>
            </ul>
            <ul>
              <Link to="#">Contact</Link>
            </ul>
          </li>
          <Typography className={classes.footerCopyright}>
            &copy; by Md Jishan Ansari. All rights reserved.
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
