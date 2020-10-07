import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../login/login';
import MyList from '../mylist/mylist';
import MoviePage from '../movie-page/movie-page';
import Review from '../review/review';
import Player from '../player/player';

const App = ({film}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage {...film} />;
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id/review">
          <Review />
        </Route>
        <Route path="/films/:id">
          <MoviePage />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  film: PropTypes.object.isRequired,
};

export default App;
