import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const Breadcrumbs = (props) => {
  const {filmId, name} = props;
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/films/${filmId}`} className="breadcrumbs__link">
            {name}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  filmId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Breadcrumbs;
