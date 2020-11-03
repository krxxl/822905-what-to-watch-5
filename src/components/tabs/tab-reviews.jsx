import React from 'react';
import MovieReviews from '../movie-reviews/movie-reviews';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchCommentsList} from '../../store/api-actions'
// import { render } from 'react-dom';

class TabsReviews extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadComments, filmId} = this.props;
    loadComments(filmId);  
  }

  componentDidUpdate(nextProps) {
    const {loadComments, filmId} = this.props;

    if (nextProps.filmId !== filmId) {
      loadComments(filmId);
    }
  }
  
  render() {
    const {reviews} = this.props;
    const halfOfReviews = Math.round(reviews.length / 2);
    const firstHalfReviews = reviews.slice(0, halfOfReviews);
    const secondHalfReviews = reviews.slice(halfOfReviews);
    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {firstHalfReviews.map((review) => {
            return (
              <div key={review.id} className="review">
                <MovieReviews review={review} />
              </div>
            );
          })}  
        </div>
        <div className="movie-card__reviews-col">
          {secondHalfReviews.map((review) => {
            return (
              <div key={review.id} className="review">
                <MovieReviews review={review} />
              </div>
            );
          })}  
        </div>
      </div>
    );
  }
  
};

TabsReviews.propTypes = {
  reviews: PropTypes.shape({
    id: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      comment: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired,
      date: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired).isRequired,
  })
};


const mapStateToProps = (state) => ({
  reviews: state.DATA.reviews
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(id) {
    dispatch(fetchCommentsList(id));
  },
});

export {TabsReviews};
export default connect(mapStateToProps, mapDispatchToProps)(TabsReviews);
