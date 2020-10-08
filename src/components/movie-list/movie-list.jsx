import React from 'react';
import MovieListItem from '../movie-list-item/movie-list-item';


class MovieList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: null
    };
    this.onMouseHandle = this.onMouseHandle.bind(this);
  }

  onMouseHandle(id) {
    this.setState({active: id});
  }

  render() {

    const {films, onSmallCardClick} = this.props;

    const elements = films.map((film) => {
      const {name, id, preview} = film;

      return <MovieListItem key={id} name={name} id={id} preview={preview} onActive={this.onMouseHandle} onSmallCardClick={onSmallCardClick} />;
    });
    return (
      <div className="catalog__movies-list">
        {elements}
      </div>
    );
  }
}

export default MovieList;
