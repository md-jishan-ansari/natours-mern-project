import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  makeStyles,
  Grid,
} from '@material-ui/core';

// icons
import {
  LocationOnOutlined,
  OutlinedFlag,
  CalendarTodayOutlined,
  PersonOutlineOutlined,
} from '@material-ui/icons';

import variable from '../../config.js';
const { DB_ROUTE } = variable;

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    margin: 35,
    backgroundColor: '#f7f7f7',
    [theme.breakpoints.down('xs')]: { margin: 10 },
  },

  // *******CARD HEADER CSS

  cardHeader: {
    backgroundColor: '#fff',
    position: 'relative',
  },
  cardPicture: {
    position: 'relative',
    clipPath: 'polygon(0 0, 100% 0%, 100% 83%, 0% 98%)',
    height: '14rem',
  },

  cardPictureOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 10,
    backgroundImage: 'linear-gradient(to right bottom, #7dd56f, #28b487)',
    opacity: 0.7,
  },
  cardHeading: {
    position: 'absolute',
    textAlign: 'right',
    textTransform: 'uppercase',
    fontSize: '2rem',
    fontWeight: '300',
    bottom: '0.7rem',
    right: '1.2rem',
    width: '70%',
    zIndex: '20',
    fontFamily: "'Lato', sans-serif",
    '&> span': {
      fontSize: '1.6rem',
      fontWeight: 200,
      color: 'white',
      padding: '0.8rem 1.4rem',
      lineHeight: '1.7',
      boxDecorationBreak: 'clone',
      backgroundImage:
        'linear-gradient( to bottom right, rgba(125, 213, 111, 0.85), rgba(40, 180, 135, 0.85) )',
    },
  },

  // ******CARD DETAILS CSS

  cardDetail: {
    backgroundColor: '#FFFFFF',
    padding: '24px 30px',
    color: '#777777',
  },

  cardSubHeading: {
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: "'Lato', sans-serif",
  },
  cardText: {
    fontFamily: "'Lato', sans-serif",
    fontStyle: 'italic',
    fontSize: 15,
    fontWeight: 100,
    marginTop: 10,
    lineHeight: 1.7,
  },
  cardData: {
    '&>*': {
      display: 'flex',
      alignItems: 'center',
      marginTop: 16,
      '&>span': {
        fontSize: 13,
      },
    },
  },
  cardDataIcon: {
    color: '#55cf55',
    fontSize: 25,
    marginRight: 7,
  },

  // *****CARD FOOTER CSS

  cardFooter: {
    position: 'relative',
    padding: '24px 30px',
  },
  cardFooterValue: {
    fontFamily: "'Lato', sans-serif",
    fontWeight: 700,
    fontSize: 14,
    color: '#777777',
    marginRight: '5px',
  },
  cardFooterText: {
    fontFamily: "'Lato', sans-serif",
    fontSize: 14,
    color: '#999999',
  },
  button: {
    fontFamily: "'Lato', sans-serif",
    position: 'absolute',
    right: 30,
    top: 30,
    backgroundColor: '#55c57a',
    color: '#fff',
    borderRadius: 100,
    padding: '12px 30px',
    '&:hover': {
      backgroundColor: '#55c57a',
    },
    '&:focus': {
      backgroundColor: '#2e864b',
    },
  },
}));

const ItemCard = ({ tour }) => {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer}>
      <CardContent className={classes.card}>
        {/*  */}
        {/* ****card Header****** */}

        <Box className={classes.cardHeader}>
          <Box className={classes.cardPicture}>
            <Box className={classes.cardPictureOverlay}></Box>
            <img
              src={`${DB_ROUTE}/img/tours/${tour.imageCover}`}
              alt={`${tour.name}`}
            />
          </Box>
          <Typography variant="h3" className={classes.cardHeading}>
            <span>{tour.name}</span>
          </Typography>
        </Box>

        {/* ****card Details****** */}

        <Box className={classes.cardDetail}>
          <Typography variant="h4" className={classes.cardSubHeading}>
            {`${tour.difficulty} ${tour.duration}-day tour`}
          </Typography>

          <Typography className={classes.cardText}>{tour.summary}</Typography>

          <Grid container className={classes.cardData}>
            <Grid item xs={6}>
              <LocationOnOutlined className={classes.cardDataIcon} />
              <span>{tour.startLocation.description}</span>
            </Grid>
            <Grid item xs={6}>
              <CalendarTodayOutlined className={classes.cardDataIcon} />
              <span>
                {new Date(tour.startDates[0]).toLocaleString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </Grid>
            <Grid xs={6} item>
              <OutlinedFlag className={classes.cardDataIcon} />
              <span>{`${tour.locations.length} stops`}</span>
            </Grid>
            <Grid xs={6} item>
              <PersonOutlineOutlined className={classes.cardDataIcon} />
              <span>{`${tour.maxGroupSize} people`}</span>
            </Grid>
          </Grid>
        </Box>

        {/* ****card Footer****** */}

        <Box className={classes.cardFooter}>
          <Box>
            <Typography style={{ marginBottom: '5px' }}>
              <span
                className={classes.cardFooterValue}
              >{`$${tour.price}`}</span>
              <span className={classes.cardFooterText}>per person</span>
            </Typography>
            <Typography>
              <span className={classes.cardFooterValue}>
                {tour.ratingsAverage}
              </span>
              <span className={classes.cardFooterText}>
                rating ({tour.ratingsQuantity})
              </span>
            </Typography>
          </Box>
          <Link to={`/tour/${tour._id}`}>
            <Button variant="contained" className={classes.button}>
              Details
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
