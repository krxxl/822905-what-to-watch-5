import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const Breadcrumbs = (props) => {
  const {id, name} = props;
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/films/${id}`} className="breadcrumbs__link">
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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Breadcrumbs;
