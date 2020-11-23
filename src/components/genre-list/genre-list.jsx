import React from 'react';
import GenreListItem from '../genre-list-item/genre-list-item';
import PropTypes from 'prop-types';

const GenreList = ({genres, genreActive, onGenreChange, onResetCount}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => {
        const className = genreActive === genre ? `catalog__genres-item--active` : ``;
        return <GenreListItem className={className} onResetCount={onResetCount} onGenreChange={onGenreChange} key={genre} name={genre} />;
      }
      )}
    </ul>
  );
};

GenreList.propTypes = {
  genres: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  genreActive: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  onResetCount: PropTypes.func.isRequired,
};

export default GenreList;
