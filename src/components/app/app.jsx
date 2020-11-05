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
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import browserHistory from "../../browser-history";
import PrivateRoute from '../../components/private-route/private-route';


const ReviewFilm = withForm(Review);
const BigPlayer = withBigVideo(Player);

const App = ({films, isLoading}) => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/"
          render={({history}) => {
            return isLoading ? (
              <MainPage
                onSmallCardClick={(id) => history.push(`/films/${id}`)}
                onPlayButton={(id) => history.push(`/player/${id}`)}
              // films={films}
              />
            ) : (
              <div>
                <h1>LOADING</h1>
              </div>
            );
          }}
        />
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/mylist"
          render={({history}) => (
            <MyList
              onSmallCardClick={(id) => history.push(`/films/${id}`)}
              films={films}
            />
          )}
        />
        <PrivateRoute exact path="/films/:id/review"
          render={(props) => {
            const filmId = +props.match.params.id;
            const film = films.find((item) => item.id === +filmId);
            const {backgroundImage, name, posterImage} = film;
            return (
              <ReviewFilm
                backgroundImage={backgroundImage}
                filmId={filmId}
                name={name}
                posterImage={posterImage}
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
                onPlayButton={(id) => props.history.push(`/player/${id}`)}
                films={films}
                history={props.history}
                // reviews={reviews}
                filmId={filmId}
              />
            );
          }

          } />
        <Route exact path="/player/:id"
          render={(props) => {
            const {history} = props;
            const filmId = +props.match.params.id;
            const film = films.find((item) => item.id === filmId);
            const {videoLink, backgroundImage, name} = film;
            return (
              <BigPlayer name={name} filmId={filmId} history={history} video={videoLink} preview={backgroundImage} />
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
  films: PropTypes.array.isRequired,
  history: PropTypes.object,
  match: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
};

// export default App;
const mapStateToProps = ({DATA, SHOW, USER}) => ({
  genreActive: SHOW.genreActive,
  films: DATA.films,
  count: SHOW.count,
  activeFilm: SHOW.activeFilm,
  isLoading: DATA.isLoading,
  authorizationStatus: USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(name) {
    dispatch(ActionCreator.changeGenre(name));
  },
  onMoreButton(count) {
    dispatch(ActionCreator.moreFilms(count));
  },
  onResetCount() {
    dispatch(ActionCreator.resetCount());
  },
  onChangeActiveFilm(id) {
    dispatch(ActionCreator.changeActiveFilm(id));
  },
  changeStatus() {
    dispatch(ActionCreator.checkStatus());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
