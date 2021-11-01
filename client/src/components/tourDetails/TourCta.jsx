import clsx from 'clsx';

import { Typography, Box, Card, CardContent, Button, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: -140,
    padding: '290px 50px 110px',
    clipPath: 'polygon( 0 9vw, 100% 0, 100% 100%, 0 100% );',
    backgroundColor: '#f7f7f7',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      padding: '100px 50px',
      clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
    },
  },
  ctaContainer: {
    maxWidth: 1050,
    margin: '0 auto',
    position: 'relative',
    padding: '50px 50px 50px 0',
    borderRadius: '20px',
    backgroundColor: '#ffffff',
    [theme.breakpoints.down('sm')]: {
      padding: 50,
    },
  },

  //   images
  images: {
    position: 'relative',
    height: 150,
  },
  ctaImg: {
    position: 'absolute',
    top: 0,
    width: 150,
    height: 150,
    borderRadius: '50%',
    [theme.breakpoints.down('sm')]: {
      left: '50%',
    },
  },

  image1: {
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to right bottom, #7dd56f, #28b487)',
    zIndex: 10,
    transform: 'translateX(-35%)',
    [theme.breakpoints.down('sm')]: {
      transform: 'translateX(-90%)',
    },
  },

  image2: {
    zIndex: 9,
    transform: 'translateX(-10%) scale(0.97)',
    [theme.breakpoints.down('sm')]: {
      transform: 'translateX(-50%) scale(0.97)',
    },
  },
  image3: {
    zIndex: 8,
    transform: 'translateX(15%) scale(0.94)',
    [theme.breakpoints.down('sm')]: {
      transform: 'translateX(-10%) scale(0.94)',
    },
  },

  //content

  content: {
    margin: 'auto 0',
  },

  contentOverview: {
    paddingLeft: 40,
    [theme.breakpoints.down('md')]: {
      marginTop: 20,
      paddingLeft: '0',
    },
  },

  heading: {
    fontSize: 23,
    fontweight: '700',
    backgroundImage: 'linear-gradient(to right, #7dd56f, #28b487)',
    '-webkit-background-clip': 'text',
    color: 'transparent',
    letterSpacing: '0.1rem',
    lineHeight: '1.3',
  },

  summary: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 19,
    fontWeight: 400,
    color: '#777',
  },

  //Button

  BookingButton: {
    backgroundColor: '#55c57a',
    color: 'white',
    padding: '14px 30px',
    marginLeft: '30px',

    fontSize: '16px',
    fontFamily: 'Lato, sans-serif',
    borderRadius: 100,
    '&:hover': {
      backgroundColor: '#55c57a',
    },

    [theme.breakpoints.down('md')]: {
      marginTop: 20,
      marginLeft: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '14px 20px',
    },
  },
}));

const TourCta = ({ images, duration }) => {
  const classes = useStyles();
  console.log(`${process.env.REACT_APP_USER_IMG_ROUTE}/img/logo-white.png`);
  return (
    <Box className={classes.container}>
      <Card className={classes.ctaContainer}>
        <CardContent>
          <Grid container>
            <Grid item lg={2} md={4} sm={12} xs={12} className={classes.images}>
              <Box className={clsx(classes.ctaImg, classes.image1)}>
                <img style={{ height: 'unset' }} src="/img/logo-white.png" alt="logo" />
              </Box>
              <img
                src={`/img/tours/${images[1]}`}
                alt="photo1"
                className={clsx(classes.image2, classes.ctaImg)}
              />
              <img
                src={`/img/tours/${images[2]}`}
                alt="photo1"
                className={clsx(classes.image3, classes.ctaImg)}
              />
            </Grid>
            <Grid item lg={10} md={8} sm={12} className={classes.content}>
              <Grid container>
                <Grid item lg={8} md={12} className={classes.contentOverview}>
                  <Typography className={classes.heading}>WHAT ARE YOU WAITING FOR? </Typography>
                  <Typography className={classes.summary}>
                    {duration} days. 1 adventure. Infinite memories. Make it yours today!{' '}
                  </Typography>
                </Grid>
                <Grid item lg={4} md={12} style={{ marginLeft: 'auto' }}>
                  <Button variant="contained" className={classes.BookingButton}>
                    Log in to book tour
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TourCta;
