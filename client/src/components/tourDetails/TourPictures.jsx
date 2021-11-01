import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    marginTop: -138,
    display: 'flex',
    clipPath: 'polygon( 0 9vw, 100% 0, 100% calc(100% - 9vw), 0 100% );',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
    },
  },
  image1: {
    width: '33.33%',
    [theme.breakpoints.up('md')]: {
      padding: '90px 0 0',
    },
  },
  image2: {
    width: '33.33%',
    [theme.breakpoints.up('md')]: {
      padding: '45px 0 45px',
    },
  },
  image3: {
    width: '33.33%',
    [theme.breakpoints.up('md')]: {
      padding: '0 0 90',
    },
  },
}));

const TourPictures = ({ tourImages }) => {
  const classes = useStyles();
  return (
    <Box className={classes.imageContainer}>
      <Box className={classes.image1}>
        <img src={`/img/tours/${tourImages[0]}`} alt="tour scean 1" />
      </Box>
      <Box className={classes.image2}>
        <img src={`/img/tours/${tourImages[1]}`} alt="tour scean 2" />
      </Box>
      <Box className={classes.image3}>
        <img src={`/img/tours/${tourImages[2]}`} alt="tour scean 3" />
      </Box>
    </Box>
  );
};

export default TourPictures;
