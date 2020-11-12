import React from 'react';
import MovieReviews from '../movie-reviews/movie-reviews';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchCommentsList} from '../../store/api-actions';
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
    const {reviews, isLoadingReviews, isLoadingReviewsError} = this.props;
    const halfOfReviews = Math.round(reviews.length / 2);
    const firstHalfReviews = reviews.slice(0, halfOfReviews);
    const secondHalfReviews = reviews.slice(halfOfReviews);
    const alert = () => {
      if (!isLoadingReviews && !isLoadingReviewsError) {
        return <div className="alert-loading">LOADING...</div>;
      } else if (isLoadingReviewsError) {
        return <div className="alert-error">Somethimg went wrong, try again</div>;
      }
      return false;
    };
    return (
      <div className="movie-card__reviews movie-card__row">
        {alert()}
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
}

TabsReviews.propTypes = {
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
  loadComments: PropTypes.func.isRequired,
  filmId: PropTypes.number.isRequired,
  isLoadingReviews: PropTypes.bool.isRequired,
  isLoadingReviewsError: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  reviews: state.DATA.reviews,
  isLoadingReviews: state.DATA.isLoadingReviews,
  isLoadingReviewsError: state.DATA.isLoadingReviewsError
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(id) {
    dispatch(fetchCommentsList(id));
  },
});

export {TabsReviews};
export default connect(mapStateToProps, mapDispatchToProps)(TabsReviews);
