import React from 'react';
import Header from '../header/header';

class Review extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      "rating": ``,
      "review-text": ``,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleFieldChange(evt) {
    evt.preventDefault();
    const {value, name} = evt.target;
    this.setState({
      [name]: value
    });
  }


  render() {
    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__poster movie-card__poster--small">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form" onSubmit={this.handleSubmit}>
            <div className="rating">
              <div className="rating__stars">
                <input onChange={this.handleFieldChange} className="rating__input" id="star-1" type="radio" name="rating" value="1" />
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input onChange={this.handleFieldChange} className="rating__input" id="star-2" type="radio" name="rating" value="2" />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input onChange={this.handleFieldChange} className="rating__input" id="star-3" type="radio" name="rating" value="3" checked />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input onChange={this.handleFieldChange} className="rating__input" id="star-4" type="radio" name="rating" value="4" />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input onChange={this.handleFieldChange} className="rating__input" id="star-5" type="radio" name="rating" value="5" />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea onChange={this.handleFieldChange} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }

}

export default Review;
