import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../login/login';
import MyList from '../mylist/mylist';
import MoviePage from '../movie-page/movie-page';
import Review from '../review/review';
import Player from '../player/player';
import withForm from '../../hocs/with-form/with-form';
import withBigVideo from '../../hocs/with-big-video/with-big-video';
import browserHistory from "../../browser-history";
import PrivateRoute from '../../components/private-route/private-route';


const ReviewFilm = withForm(Review);
const BigPlayer = withBigVideo(Player);

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/"
          render={({history}) => (
            <MainPage
              history={history}
            />
          )}
        />
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/mylist"
          render={({history}) => (
            <MyList
              history={history}
            />
          )}
        />
        <PrivateRoute exact path="/films/:id/review"
          render={(props) => {
            const filmId = +props.match.params.id;
            return (
              <ReviewFilm
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
                history={props.history}
                filmId={filmId}
              />
            );
          }

          } />
        <Route exact path="/player/:id"
          render={(props) => {
            const {history} = props;
            const filmId = +props.match.params.id;
            return (
              <BigPlayer filmId={filmId} history={history} />
            );
          }}
        />
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
};

export default App;
