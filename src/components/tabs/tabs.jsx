import React from 'react';
import TabOverview from '../tab-overview/tab-overview';
import TabDetail from '../tab-detail/tab-detail';
import TabReviews from '../tab-review/tab-reviews';
import PropTypes from 'prop-types';
import {TabName} from '../../constant/constant';

const getComponentByName = (type, film, filmId) => {
  switch (type) {
    case TabName.OVERVIEW:
      return <TabOverview film={film} />;
    case TabName.DETAIL:
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
    starring: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    isFavorite: PropTypes.bool.isRequired,
    videoLink: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  filmId: PropTypes.number.isRequired,
};

export default Tabs;
