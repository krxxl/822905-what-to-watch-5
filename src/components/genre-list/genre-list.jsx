import React from 'react';
import GenreListItem from '../genre-list-item/genre-list-item';

const GenreList = () => {
  return (
    <ul className="catalog__genres-list">
      <GenreListItem />
    </ul>
  );
};

export default GenreList;
