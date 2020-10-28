import React from 'react';
import {genres} from '../../mocks/genres';
import GenreListItem from '../genre-list-item/genre-list-item';
import PropTypes from 'prop-types';

const GenreList = ({genreActive, onGenreChange, onResetCount}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => {
        const className = genreActive === genre.name ? `catalog__genres-item--active` : ``;
        return <GenreListItem className={className} onResetCount={onResetCount} onGenreChange={onGenreChange} key={genre.id} name={genre.name} />;
      }
      )}
    </ul>
  );
};

GenreList.propTypes = {
  genreActive: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  onResetCount: PropTypes.func.isRequired,
};

export default GenreList;
