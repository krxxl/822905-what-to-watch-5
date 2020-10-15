import React from 'react';

export default class Review extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className="movie-nav__item movie-nav__item--active">
              <a href="#" className="movie-nav__link">
                Overview
              </a>
            </li>
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link">
                Details
              </a>
            </li>
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link">
                Reviews
              </a>
            </li>
          </ul>
        </nav>

        <div className="movie-rating">
          <div className="movie-rating__score">{rating}</div>
          <p className="movie-rating__meta">
            <span className="movie-rating__level">{ratingWord(rating)}</span>
            <span className="movie-rating__count">{count} ratings</span>
          </p>
        </div>

        <div className="movie-card__text">
          {desc}

          <p className="movie-card__director">
            <strong>Director: {director}</strong>
          </p>

          <p className="movie-card__starring">
            <strong>Starring: {starring.join(`, `)} and other</strong>
          </p>
        </div>
      </div>
    );
  }
}
