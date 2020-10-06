import React from 'react';
import Header from '../header/header';
import MovieCardWrap from '../movie-card-wrap/movie-card-wrap';

const MovieCard = () => {
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img
          src="img/bg-the-grand-budapest-hotel.jpg"
          alt="The Grand Budapest Hotel"
        />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <MovieCardWrap />
    </section>
  );
};


export default MovieCard;
