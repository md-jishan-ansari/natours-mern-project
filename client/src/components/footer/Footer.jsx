import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#f7f7f7',
    padding: '40px 30px 30px 30px',
  },
  footerItem: {
    display: 'flex',
    flexFlow: 'column wrap',
    marginLeft: 'auto',
  },
  footerImage: {
    height: 36,
    margin: '0 auto',
  },
  list: {
    display: 'flex',
    listStyle: 'none',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    '&>*': {
      margin: '5px 0',
      padding: '0px 16px',

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
  },
  footerCopyright: {
    margin: '0 0 0 auto',
    color: '#999',
    fontSize: 13,
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.footer}>
      <Toolbar>
        <Grid container style={{ justifyContent: 'center' }}>
          <Grid>
            <img
              src="/img/logo-green.png"
              alt="Natour logo"
              className={classes.footerImage}
            />
          </Grid>

          <Grid item className={classes.footerItem}>
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
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

// import { AppBar, Toolbar, Typography, Box, makeStyles } from '@material-ui/core';
// import { Link } from 'react-router-dom';

// const useStyles = makeStyles({
//   footer: {
//     backgroundColor: '#f7f7f7',
//     padding: '40px 30px 30px 30px',
//   },
//   footerItem: {
//     display: 'flex',
//     flexFlow: 'column wrap',
//     marginLeft: 'auto',
//   },
//   footerImage: {
//     height: 36,
//   },
//   list: {
//     display: 'flex',
//     listStyle: 'none',

//     '&>*': {
//       '&>*': {
//         textDecoration: 'none',
//         color: '#777',
//         fontSize: 13,
//         padding: 0,
//         margin: 0,
//       },
//       '&>*:hover': {
//         color: '#55c57a',
//       },
//     },
//   },
//   footerCopyright: {
//     margin: '0 0 0 auto',
//     color: '#999',
//     fontSize: 13,
//   },
// });

// const Footer = () => {
//   const classes = useStyles();

//   return (
//     <AppBar className={classes.footer}>
//       <Toolbar>
//         <Box>
//           <img src="/img/logo-green.png" alt="Natour logo" className={classes.footerImage} />
//         </Box>
//         <Box className={classes.footerItem}>
//           <li className={classes.list}>
//             <ul>
//               <Link to="#">About us</Link>
//             </ul>
//             <ul>
//               <Link to="#">Download apps</Link>
//             </ul>
//             <ul>
//               <Link to="#">Become a guide</Link>
//             </ul>
//             <ul>
//               <Link to="#">Careers</Link>
//             </ul>
//             <ul>
//               <Link to="#">Contact</Link>
//             </ul>
//           </li>
//           <Typography className={classes.footerCopyright}>
//             &copy; by Md Jishan Ansari. All rights reserved.
//           </Typography>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Footer;
