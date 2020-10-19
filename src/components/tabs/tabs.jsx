import React from 'react';
import TabOverview from './tab-overview';
import TabDetail from './tab-detail';
import TabReviews from './tab-reviews';
import PropTypes from 'prop-types';

const getComponentByName = (type, film, filmReviews) => {
  switch (type) {
    case `Overview`:
      return <TabOverview film={film} />;
    case `Detail`:
      return <TabDetail film={film} />;
  }

  return <TabReviews filmReviews={filmReviews} />;
};

const Tabs = ({active, film, filmReviews}) => {
  return (
    <React.Fragment>
      {getComponentByName(active, film, filmReviews)}
    </React.Fragment>
  );
};

Tabs.propTypes = {
  active: PropTypes.string.isRequired,
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    hero: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    isInList: PropTypes.bool.isRequired,
    video: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  filmReviews: PropTypes.shape({
    id: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired).isRequired,
  })
};

export default Tabs;
