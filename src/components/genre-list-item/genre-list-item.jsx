import React from 'react';


const GenreListItem = ({className, name, onGenreChange}) => {
  return (
    <li className={`catalog__genres-item ${className}`}>
      <a href="#" onClick={(evt) => {onGenreChange(evt, name)}} className="catalog__genres-link">{name}</a>
    </li>
  );
};


export default GenreListItem;
