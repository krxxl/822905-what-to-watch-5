import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../login/login';
import MyList from '../mylist/mylist';
import MoviePage from '../movie-page/movie-page';
import Review from '../review/review';
import Player from '../player/player';
import withForm from '../../hocs/with-form/with-form';

const ReviewFilm = withForm(Review);

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
        <Route exact path="/films/:id/review"
          render={(props) => {
            const filmId = +props.match.params.id;
            return (
              <ReviewFilm
                films={films}
                filmId={filmId}
              />
            );
          }
          } />
        <Route path="/films/:id"
          render={(props) => {
            const filmId = +props.match.params.id;

            return (
              <MoviePage
                onSmallCardClick={(id) => props.history.push(`/films/${id}`)}
                films={films}
                history={props.history}
                reviews={reviews}
                filmId={filmId}
              />
            );
          }

          } />
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
  history: PropTypes.object,
  match: PropTypes.object,
};

export default App;
