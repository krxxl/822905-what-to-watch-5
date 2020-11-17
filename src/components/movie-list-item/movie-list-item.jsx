import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.timeout = null;
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const {onMouseHandle, name, id, onSmallCardClick} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => {
          this.timeout = setTimeout(() => {
            onMouseHandle(true);
          }, 1000);
        }}
        onMouseLeave={
          () => {
            clearTimeout(this.timeout);
            onMouseHandle(false);
          }}
        onClick={() => {
          onSmallCardClick(id);
        }}
      >
        <div className="small-movie-card__image">{this.props.children}</div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${id}`}>
            {name}
          </Link>
        </h3>
      </article>
    );
  }
}

MovieListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onMouseHandle: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  history: PropTypes.object,
  onSmallCardClick: PropTypes.func.isRequired,
};

export default MovieListItem;
