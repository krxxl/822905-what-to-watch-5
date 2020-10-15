import React from 'react';
import MovieNav from '../movie-nav/movie-nav'

export default class MovieDesc extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onTabHandle = this.onTabHandle.bind(this)
    this.state = {
      active: `Overview`
    }
  }

  onTabHandle(evt, name) {
    evt.preventDefault();
    this.setState({ active: name})
  }

  componentDidUpdate() {

    if (this.state.active===`Overview`) {
      // setTimeout(()=>{
      console.log(1)
      // }, 1000);
    } else if (this.state.active===`Detail`) {
      console.log(3)
    } else {
      console.log(2)
    }
  }

  render() {

    const {tabNames} = this.props;

    return (
      <div className="movie-card__desc">
       <MovieNav tabNames={tabNames} clickOnTab={this.onTabHandle}/>

        {/* <div className="movie-rating">
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
        </div> */}
      </div>
    );
  }
}
