import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Film = {
  name: `Matrix`,
  genre: `Fantastic`,
  yaer: `2001`,
};

ReactDOM.render(<App film={Film} />, document.querySelector(`#root`));
