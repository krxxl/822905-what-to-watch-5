import React from 'react';
import GenresList from '../genres-list/genres-list';
import MovieList from '../movie-list/movie-list';
import MoreButton from '../more-button/more-button';


const Catalog = () => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList />

      <MovieList />

      <MoreButton />
    </section>
  );
};

export default Catalog;
