import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import MovieList from '../movie-list/movie-list';

const MyList = ({films, onSmallCardClick}) => {
  return (
    <div className="user-page">
      <Header />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MovieList films={films} onSmallCardClick={onSmallCardClick}/>
      </section>
      <Footer />
    </div>
  );
};

export default MyList;
