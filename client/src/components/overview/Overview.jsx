import { useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { getAllTours } from '../../redux/actions/tourAction';

import ItemCard from './ItemCard';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#f7f7f7',
    // margin: '0 30px',
    padding: '50px 90px',
    [theme.breakpoints.down('xs')]: { padding: 20 },
  },
}));

const Overview = () => {
  const classes = useStyles();

  //   1)get tour data form collection
  const { data: tourData } = useSelector((state) => state.toursReducer.AllTours);
  let tours;
  for (const x in tourData) {
    tours = tourData[x];
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTours());
  }, [dispatch]);

  return (
    <Grid container justifyContent="space-between" className={classes.container}>
      {tours &&
        tours.map((tour) => (
          <Grid key={tour.id} item lg={4} md={6} sm={12}>
            <ItemCard tour={tour} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Overview;
