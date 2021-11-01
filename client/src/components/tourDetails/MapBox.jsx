import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

import { Room } from '@material-ui/icons';

import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: -138,
    clipPath: 'polygon( 0 9vw, 100% 0, 100% calc(100% - 9vw), 0 100% );',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
    },
    width: '100%',
    height: 650,
  },
  markerBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    width: 32,
    height: 40,
  },
  markerIcon: {
    width: 40,
    height: 40,
    color: '#35a435',
  },
}));

const MapBox = ({ locations }) => {
  const classes = useStyles();
  const coordinates = locations.map((loc) => loc.coordinates);

  const [viewport, setViewport] = useState({
    latitude: coordinates[0][1],
    longitude: coordinates[0][0],
    width: '100%',
    height: '100%',
    zoom: 5,
    mapboxApiAccessToken:
      'pk.eyJ1IjoibWQtamlzaGFuLWFuc2FyaSIsImEiOiJja3RxenJremEwcmtuMm5sM3NuM25mdWdnIn0.awu0I94MYAxtNjN9H8IJFg',
    mapStyle: 'mapbox://styles/md-jishan-ansari/cktr8uw1s1tyb17lpldgqltax',
  });
  const [tourDay, setTourDay] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        setTourDay(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  let day;
  useEffect(() => {
    setTourDay(day);
  }, [day]);

  return (
    <Box className={classes.container}>
      <ReactMapGL
        {...viewport}
        scrollZoom={false}
        getMapCenterByLngLatPosition={coordinates}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {locations.map((loc) => {
          day = loc;
          return (
            <>
              <Marker
                key={loc._id}
                latitude={loc.coordinates[1]}
                longitude={loc.coordinates[0]}
                // offsetLeft={-2}
                // offsetTop="-2"
                // anchor="bottom"
              >
                <button
                  className={classes.markerBtn}
                  onClick={(e) => {
                    e.preventDefault();
                    setTourDay(loc);
                  }}
                >
                  <Room className={classes.markerIcon} />
                </button>
              </Marker>
            </>
          );
        })}

        {tourDay ? (
          <Popup
            latitude={tourDay.coordinates[1]}
            longitude={tourDay.coordinates[0]}
            anchor="bottom"
            onClose={() => {
              setTourDay(null);
            }}
          >
            <Box>
              Day {tourDay.day}: {tourDay.description}
            </Box>
          </Popup>
        ) : null}
      </ReactMapGL>
    </Box>
  );
};

export default MapBox;
