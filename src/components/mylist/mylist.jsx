import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import MovieList from '../movie-list/movie-list';

const MyList = () => {
  return (
    <div className="user-page">
      <Header />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MovieList />
      </section>
      <Footer />
    </div>
  );
};

export default MyList;
