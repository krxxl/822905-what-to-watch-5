import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../login/login';
import MyList from '../mylist/mylist';
import MoviePage from '../movie-page/movie-page';
import Review from '../review/review';
import Player from '../player/player';

const App = ({films, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"
          render={({history}) => (
            <MainPage
              onSmallCardClick={(id) => history.push(`/films/${id}`)}
              films={films}
            />
          )}
        />
        {/* <MainPage films={films} />;
        </Route> */}
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/mylist"
          render={({history}) => (
            <MyList
              onSmallCardClick={(id) => history.push(`/films/${id}`)}
              films={films}
            />
          )}
        />
        <Route exact path="/films/:id/review">
          <Review />
        </Route>
        <Route path="/films/:id"
          render={(props) => (
            <MoviePage
              onSmallCardClick={(id) => props.history.push(`/films/${id}`)}
              films={films}
              reviews={reviews}
              {...props}
            />
          )} />
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
  films: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
};

export default App;
