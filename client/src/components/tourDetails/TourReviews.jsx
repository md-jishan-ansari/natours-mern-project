import 'react-multi-carousel/lib/styles.css';

import { Box, Typography, makeStyles, Card, CardContent, Grid } from '@material-ui/core';

import { StarOutlineOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  reviewContainer: {
    marginTop: -138,
    padding: '180px 0',
    clipPath: 'polygon( 0 9vw, 100% 0, 100% calc(100% - 9vw), 0 100% );',
    background: 'linear-gradient(to right bottom, #7dd56f, #28b487)',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      padding: '5px 0',
      clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
    },
  },

  reviews: {
    display: 'flex',
    overflowX: 'auto',
    overflowY: 'hidden',
    padding: 60,
    [theme.breakpoints.down('sm')]: {
      padding: 30,
    },
  },

  cardContainer: {
    position: 'relative',
    minWidth: 310,
    maxWidth: 311,
    height: '100%',
    margin: '10px 30px',
    padding: '40px',
    backgroundColor: '#F7F7F7',
  },

  // Header

  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImg: {
    width: 45,
    marginRight: 15,
    '&>img': {
      borderRadius: '100%',
    },
  },
  heading: {
    textTransform: 'uppercase',
    fontSize: '15px',
    fontFamily: "'Lato', sans-serif",
    fontWeight: '700',
    color: '#777777',
  },

  // Contant

  content: {
    fontSize: '15px',
    fontStyle: 'italic',
    fontFamily: "'Lato', sans-serif",
    color: '#777777',
    marginBottom: '20px',
  },

  // footer

  footer: {
    position: 'absolute',
    bottom: 40,
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
  },
  activeStar: {
    color: '#55c57a',
  },
  inactiveStar: {
    color: '#bbb',
  },
}));

const TourReviews = ({ reviews }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.reviewContainer}>
      <Grid item className={classes.reviews}>
        {reviews.map((review) => (
          <Card className={classes.cardContainer}>
            <CardContent>
              <Box className={classes.header}>
                <Box className={classes.headerImg}>
                  <img src={`/img/users/${review.user.photo}`} alt={`{review.user.name}`} />
                </Box>
                <Typography className={classes.heading}>{review.user.name}</Typography>
              </Box>
              <Box className={classes.content}>{review.review}</Box>
              <Box className={classes.footer}>
                {[1, 2, 3, 4, 5].map((ratingStar) =>
                  ratingStar <= review.rating ? (
                    <StarOutlineOutlined className={classes.activeStar} />
                  ) : (
                    <StarOutlineOutlined className={classes.inactiveStar} />
                  )
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export default TourReviews;
