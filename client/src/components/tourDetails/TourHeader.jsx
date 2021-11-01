import { Box, Typography, makeStyles, Grid } from '@material-ui/core';

// icons
import { AccessTime, LocationOnOutlined } from '@material-ui/icons';

import variable from '../../config.js';
const { DB_ROUTE } = variable;

const useStyles = makeStyles((theme) => ({
  tourHeader: {
    position: 'relative',
    maxHeight: 700,
    marginTop: -80,
    clipPath: 'polygon( 0 0, 100% 0, 100% calc(100% - 9vw), 0 100% );',
    [theme.breakpoints.down('sm')]: {
      clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
      marginTop: -60,
    },
  },
  imgOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 10,
    backgroundImage: 'linear-gradient(to right bottom, #7dd56f, #28b487)',
    opacity: 0.85,
  },
  headerBox: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    zIndex: 20,
  },

  tourHeading: {
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '300',
    width: '70%',
    margin: '0 auto',
    fontFamily: "'Lato', sans-serif",
    '& > span': {
      fontSize: '3rem',
      fontWeight: 300,
      color: 'white',
      padding: '1rem 1.3rem',
      lineHeight: '1.7',
      boxDecorationBreak: 'clone',
      backgroundImage:
        'linear-gradient( to bottom right, rgba(125, 213, 111, 0.85), rgba(40, 180, 135, 0.85) )',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '&>span': {
        fontSize: '2rem',
      },
    },
    [theme.breakpoints.down('xs')]: {
      '&>span': {
        fontSize: '1.5rem',
        padding: '0.7rem 1rem',
        lineHeight: '2',
      },
    },
  },
  headerDiscription: {
    justifyContent: 'center',
    marginTop: 20,
    color: '#f7f7f7',
    fontSize: '15px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    '&>*': {
      display: 'flex',
      alignItems: 'center',
      padding: 16,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
      '&>*': {
        padding: 4,
      },
    },
  },
  tourIcon: {
    marginRight: 5,
  },
}));

const TourHeader = ({ tour }) => {
  const classes = useStyles();
  return (
    <Box className={classes.tourHeader}>
      <Box className={classes.imgOverlay}></Box>
      <Box className={classes.coverImg}>
        <img
          src={`${DB_ROUTE}/img/tours/${tour.imageCover}`}
          alt={`${tour.name}`}
        />
      </Box>
      <Box className={classes.headerBox}>
        <Typography className={classes.tourHeading}>
          <span>{tour.name} tour</span>
        </Typography>
        <Grid container className={classes.headerDiscription}>
          <Grid item>
            <AccessTime className={classes.tourIcon} />
            <span>{tour.duration} days</span>
          </Grid>
          <Grid item>
            <LocationOnOutlined className={classes.tourIcon} />
            <span>{tour.startLocation.description}</span>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TourHeader;
