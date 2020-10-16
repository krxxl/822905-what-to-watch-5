import React from 'react';
import MovieNav from '../movie-nav/movie-nav';
import Tabs from '../tabs/tabs'

export default class MovieDesc extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onTabHandle = this.onTabHandle.bind(this)
    this.state = {
      active: `Overview`,
    }
  }

  onTabHandle(evt, name) {
    evt.preventDefault();
    this.setState({ active: name })
  }

  render() {

    const {film, filmReviews, tabNames} = this.props;
    const {active} = this.state


    return (
      <div className="movie-card__desc">
        <MovieNav active={active} tabNames={tabNames} clickOnTab={this.onTabHandle} />
        <Tabs filmReviews={filmReviews} film={film} active={active}/>
      </div>
    );
  }
}
