import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieListItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.handlerSmallCardClick = this.handlerSmallCardClick.bind(this)
    }

    handlerSmallCardClick(id) {
      const {history} = this.props;
      history.push(`/films/${id}`);
    }

    render() {
      const {
        onMouseHandle,
        name,
        id,
      } = this.props;
    
      return (
        <article
          className="small-movie-card catalog__movies-card"
          onMouseEnter={onMouseHandle}
          onMouseLeave={onMouseHandle}
          onClick={()=> {this.handlerSmallCardClick(id)}}
        >
          <div className="small-movie-card__image">
            {this.props.children}
          </div>
          <h3 className="small-movie-card__title">
            <Link className="small-movie-card__link" to={`/films/${id}`}>
              {name}
            </Link>
          </h3>
        </article>
      );
    }
 
};


MovieListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  // onSmallCardClick: PropTypes.func.isRequired,
  onMouseHandle: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default MovieListItem;
