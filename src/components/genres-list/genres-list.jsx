import React from 'react';
import GenresItem from '../genres-item/genres-item';

const GenresList = () => {
  return (
    <ul className="catalog__genres-list">
      <GenresItem />
    </ul>
  );
};

export default GenresList;
