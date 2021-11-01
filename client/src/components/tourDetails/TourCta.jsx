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
      clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
    },
  },
  ctaContainer: {
    maxWidth: 1010,
    margin: '0 auto',
    position: 'relative',
    padding: '90px 50px 90px 220px',
    borderRadius: '20px',
    backgroundColor: '#ffffff',
  },
  content: {
    paddingTop: 0,
  },
  ctaCard: {},

  // images

  images: {},

  ctaImg: {
    width: 150,
    height: 150,
    // position: 'absolute',
    left: 0,
    top: '50%',
    borderRadius: '50%',
  },

  image1: {
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to right bottom, #7dd56f, #28b487)',
    zIndex: 10,
    transform: 'translate(-35%, -50%)',
  },
  image2: {
    zIndex: 9,
    transform: 'translate(-10%, -50%) scale(0.97)',
  },
  image3: {
    zIndex: 8,
    transform: 'translate(15%, -50%) scale(0.94)',
  },

  // contentContainer

  contentContaniner: {
    margin: 'auto 0',
  },
  BookingButton: {
    backgroundColor: '#55c57a',
    color: 'white',
    padding: '14px 30px',
    font: "16px 'Lato, sans-serif'",
    borderRadius: 100,
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: '#55c57a',
    },
  },
}));

const TourCta = ({ images, duration }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Card className={classes.ctaContainer}>
        <CardContent className={classes.content}>
          <Grid container>
            <Grid item md={3} className={classes.images}>
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
            <Grid item md={9}>
              <Grid container className={classes.contentContaniner}>
                <Grid item className={classes.ctaContent}>
                  <Typography className={classes.heading}>WHAT ARE YOU WAITING FOR? </Typography>
                  <Typography>
                    {duration} days. 1 adventure. Infinite memories. Make it yours today!{' '}
                  </Typography>
                </Grid>
                <Grid item style={{ marginLeft: 'auto' }}>
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
