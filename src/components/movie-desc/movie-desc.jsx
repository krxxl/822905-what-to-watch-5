import React from 'react';
import MovieNav from '../movie-nav/movie-nav';
import Tabs from '../tabs/tabs';
import PropTypes from 'prop-types';

export default class MovieDesc extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onTabHandle = this.onTabHandle.bind(this);
    this.state = {
      active: `Overview`,
    };
  }

  onTabHandle(evt, name) {
    evt.preventDefault();
    this.setState({active: name});
  }

  render() {

    const {film, filmReviews, tabNames} = this.props;
    const {active} = this.state;

    return (
      <div className="movie-card__desc">
        <MovieNav active={active} tabNames={tabNames} clickOnTab={this.onTabHandle} />
        <Tabs filmReviews={filmReviews} film={film} active={active}/>
      </div>
    );
  }
}

MovieDesc.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    hero: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    isInList: PropTypes.bool.isRequired,
    video: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  filmReviews: PropTypes.shape({
    id: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired).isRequired,
  }).isRequired,
  tabNames: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  active: PropTypes.string,
};
