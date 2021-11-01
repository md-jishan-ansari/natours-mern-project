import { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getTour } from '../../redux/actions/tourAction';

//components
import TourHeader from './TourHeader';
import TourDescription from './TourDescription';
import TourPictures from './TourPictures';
import TourReviews from './TourReviews';
import MapBox from './MapBox';
import TourCta from './TourCta2';

import Error from '../Error';

const TourDetails = () => {
  const params = useParams();
  const error = useSelector((state) => state.tourReducer.error);
  const data = useSelector((state) => state.tourReducer.Tour);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTour(params.id));
  }, [dispatch, params.id]);

  console.log(error.length, error);
  if (error.status === 'fail') {
    return <Error message={error.message} />;
  }

  const { data: tourData } = data;
  let tour;
  for (const x in tourData) {
    tour = tourData[x];
  }

  return (
    <>
      {tour && (
        <>
          <TourHeader tour={tour} />
          <TourDescription tour={tour} />
          <TourPictures tourImages={tour.images} />
          <MapBox locations={tour.locations} />
          <TourReviews reviews={tour.reviews} />
          <TourCta images={tour.images} duration={tour.duration} />
        </>
      )}
    </>
  );
};

export default TourDetails;
