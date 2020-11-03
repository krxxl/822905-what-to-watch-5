import React from 'react';
import TabOverview from './tab-overview';
import TabDetail from './tab-detail';
import TabReviews from './tab-reviews';
import PropTypes from 'prop-types';

const getComponentByName = (type, film, filmId) => {
  switch (type) {
    case `Overview`:
      return <TabOverview film={film} />;
    case `Detail`:
      return <TabDetail film={film} />;
  }

  return <TabReviews filmId={filmId} />;
};

const Tabs = ({active, film, filmId}) => {
  return (
    <React.Fragment>
      {getComponentByName(active, film, filmId)}
    </React.Fragment>
  );
};

Tabs.propTypes = {
  active: PropTypes.string.isRequired,
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    posterImage: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    runTime: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    videoLink: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  // filmReviews: PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   reviews: PropTypes.arrayOf(PropTypes.shape({
  //     text: PropTypes.string.isRequired,
  //     author: PropTypes.string.isRequired,
  //     date: PropTypes.string.isRequired,
  //     rating: PropTypes.number.isRequired,
  //     id: PropTypes.number.isRequired,
  //   }).isRequired).isRequired,
  // })
};

export default Tabs;
