import React from 'react';
import {connect} from "react-redux";
import {addReview} from "../../store/api-actions";
import PropTypes from 'prop-types';

const withForm = (Component) => {
  class WithForm extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        "rating": ``,
        "review-text": ``,
        "formValid": false,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.stars = [1, 2, 3, 4, 5];
    }

    handleSubmit(evt) {
      const {onSubmit} = this.props;

      evt.preventDefault();

      onSubmit({
        id: this.props.filmId,
        rating: this.state[`rating`],
        comment: this.state[`review-text`],
      });
    }

    handleFieldChange(evt) {
      evt.preventDefault();
      const {value, name} = evt.target;
      this.setState({
        [name]: value
      });
      this.validateForm();
    }

    validateForm() {
      this.setState((prevState) => ({
        [`formValid`]: Boolean(prevState[`rating`]) && Boolean(prevState[`review-text`])
      }));
    }


    render() {
      const isError = this.props.sendingReviewError ? <div className="alert-error">Something goes wrong, try it again...</div> : null;
      return (
        <Component {...this.props}>
          <form action="#" className="add-review__form" onSubmit={this.handleSubmit}>
            <div className="rating">
              <div key={this.state[`rating`]} className="rating__stars">
                {this.stars.map((star) => {
                  const checked = +this.state[`rating`] === star ? true : false;
                  return (
                    <React.Fragment key={star}>
                      <input onChange={this.handleFieldChange} className="rating__input" id={`star-${star}`} type="radio" name="rating" value={star} checked={checked} />
                      <label className="rating__label" htmlFor={`star-${star}`}>Rating 1</label>
                    </React.Fragment>
                  );
                }
                )}
              </div>
            </div>

            <div key={this.state[`rating-text`]} className="add-review__text">
              <textarea minLength="50" maxLength="400" onChange={this.handleFieldChange} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" disabled={!this.state.formValid || this.props.sendingReview} type="submit">Post</button>
              </div>
              {isError}
            </div>
          </form>
        </Component>
      );
    }
  }

  WithForm.propTypes = {
    // active: PropTypes.string.isRequired,
    film: PropTypes.shape({
      name: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      posterImage: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      runTime: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      scoresCount: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.array.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      videoLink: PropTypes.string.isRequired,
      previewVideoLink: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
    onSubmit: PropTypes.func.isRequired,
    filmId: PropTypes.number.isRequired,
    sendingReviewError: PropTypes.bool.isRequired,
    sendingReview: PropTypes.bool.isRequired,
  };

  const mapStateToProps = (state) => ({
    sendingReview: state.DATA.sendingReview,
    sendingReviewError: state.DATA.sendingReviewError,
  });

  const mapDispatchToProps = (dispatch) => ({
    onSubmit(data) {
      dispatch(addReview(data));
    }
  });
  return connect(mapStateToProps, mapDispatchToProps)(WithForm);
};

export default withForm;
