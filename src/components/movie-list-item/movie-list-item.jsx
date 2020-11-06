import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieListItem = (props) => {
  const {
    onMouseHandle,
    name,
    id,
    onSmallCardClick,
  } = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onMouseHandle}
      onMouseLeave={onMouseHandle}
      onClick={() => onSmallCardClick(id)}
    >
      <div className="small-movie-card__image">
        {props.children}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
};


MovieListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onSmallCardClick: PropTypes.func.isRequired,
  onMouseHandle: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default MovieListItem;
