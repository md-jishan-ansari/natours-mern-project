import { Box, Typography, Grid, makeStyles } from '@material-ui/core';

// icons
import {
  CalendarTodayOutlined,
  PersonOutlineOutlined,
  StarOutlineOutlined,
  ArrowUpward,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '-138px',
    clipPath: 'polygon( 0 9vw, 100% 0, 100% calc(100% - 9vw), 0 100% );',
    [theme.breakpoints.down('sm')]: {
      clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
      marginTop: -10,
    },
  },

  // ***************first Child

  firstChild: {
    backgroundColor: '#f7f7f7',
    padding: '260px 150px 180px',
    [theme.breakpoints.down('sm')]: {
      padding: '70px 80px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  quickFact: {
    width: 300,
    margin: '0 auto',
  },

  tourGuides: {
    width: 300,
    margin: '50px auto 0',
  },

  // ***************second Child

  secondChild: {
    backgroundColor: '#fcfcfc',
    padding: '260px 120px 150px',
    [theme.breakpoints.down('sm')]: {
      padding: '70px 90px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '50px 30px',
    },
  },

  tourLabelImage: {
    borderRadius: '100%',
    width: '30px',
    marginRight: 12,
  },

  descriptionParagraph: {
    fontFamily: "'Lato', sans-serif",
    fontSize: 17,
    marginBottom: 20,
    color: '#777777',
  },

  // ************* Applicable on both

  headingSecondary: {
    marginBottom: 22,
    fontSize: 22.5,
    fontFamily: "'Lato', sans-serif",
    fontWeight: 700,
    textTransform: 'uppercase',
    '-webkit-background-clip': 'text',
    backgroundImage: 'linear-gradient(to right, #7dd56f, #28b487)',
    color: 'transparent',
    laterSpacing: 10,
  },

  tourSubDescription: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: "'Lato', sans-serif",
    lineHeight: 3,
    textTransform: 'uppercase',
  },

  tourIcon: {
    color: '#55c57a',
    marginRight: 12,
  },
  tourLabel: {
    fontWeight: 600,
    fontSize: 14,
    marginRight: 16,
  },
  tourLabelDescription: {
    fontSize: 15,
  },
}));

const TourDescription = ({ tour }) => {
  const classes = useStyles();
  const date = new Date(tour.startDates[0]).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });
  const description = tour.description.split('\n');
  return (
    <Grid container className={classes.container}>
      <Grid xs={12} md={6} item className={classes.firstChild}>
        <Box className={classes.quickFact}>
          <Typography variant="h3" className={classes.headingSecondary}>
            QUICK FACTS
          </Typography>
          <Typography className={classes.tourSubDescription}>
            <CalendarTodayOutlined className={classes.tourIcon} />
            <span className={classes.tourLabel}>Next Date</span>
            <span className={classes.tourLabelDescription}>{date}</span>
          </Typography>
          <Typography className={classes.tourSubDescription}>
            <ArrowUpward className={classes.tourIcon} />
            <span className={classes.tourLabel}>Difficulty</span>
            <span className={classes.tourLabelDescription}>{tour.difficulty}</span>
          </Typography>
          <Typography className={classes.tourSubDescription}>
            <PersonOutlineOutlined className={classes.tourIcon} />
            <span className={classes.tourLabel}>Participants</span>
            <span className={classes.tourLabelDescription}>{tour.maxGroupSize} people</span>]
          </Typography>
          <Typography className={classes.tourSubDescription}>
            <StarOutlineOutlined className={classes.tourIcon} />
            <span className={classes.tourLabel}>Rating</span>
            <span className={classes.tourLabelDescription}>{tour.ratingsAverage}/5</span>
          </Typography>
        </Box>

        <Box className={classes.tourGuides}>
          <Typography variant="h3" className={classes.headingSecondary}>
            YOUR TOUR GUIDES
          </Typography>
          {tour.guides.map((guide) => (
            <Typography className={classes.tourSubDescription}>
              <img
                src={`/img/users/${guide.photo}`}
                alt={`${guide.name}`}
                className={classes.tourLabelImage}
              />
              <span className={classes.tourLabel}>{guide.role}</span>
              <span className={classes.tourLabelDescription}>{guide.name}</span>
            </Typography>
          ))}
        </Box>
      </Grid>
      <Grid xs={12} md={6} item className={classes.secondChild}>
        <Typography variant="h5" className={classes.headingSecondary}>
          ABOUT {tour.name}
        </Typography>
        <Typography className={classes.descriptionParagraph}>{description[0]}</Typography>
        <Typography className={classes.descriptionParagraph}>{description[1]}</Typography>
      </Grid>
    </Grid>
  );
};

export default TourDescription;
