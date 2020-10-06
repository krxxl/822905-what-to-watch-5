import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import PageContent from '../page-content/page-content';

const MainPage = ({name, genre, year}) => {
  return (
    <React.Fragment>
      <MovieCard name={name} genre={genre} year={year} />
      <PageContent />
    </React.Fragment>
  );
};

MainPage.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default MainPage;
