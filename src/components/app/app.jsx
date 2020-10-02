import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';

const App = ({film}) => {
  return <MainPage {...film} />;
};

App.propTypes = {
  film: PropTypes.object.isRequired
};

export default App;
