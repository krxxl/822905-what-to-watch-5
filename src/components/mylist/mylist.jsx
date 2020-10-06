import React from 'react';
import Header from '../header/header';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';

const MyList = () => {
  return (
    <div className="user-page">
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
};

export default MyList;
