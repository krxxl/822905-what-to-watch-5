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
import withBigVideo from '../../hocs/with-big-video/with-big-video';
import {connect} from 'react-redux';
import { ActionCreator } from '../../store/action';


const ReviewFilm = withForm(Review);
const BigPlayer = withBigVideo(Player);

const App = ({films, isLoading}) => {
  return (
    <BrowserRouter>
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
          )
        }}
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
            const film = films.find((item)=> item.id === filmId);
            const {video_link, background_image, name} = film;
            return (
              <BigPlayer name={name} filmId={filmId} history={history} video={video_link} preview={background_image}/>
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
  reviews: PropTypes.array.isRequired,
  history: PropTypes.object,
  match: PropTypes.object,
};

// export default App;
const mapStateToProps = ({DATA, SHOW}) => ({
  genreActive: SHOW.genreActive,
  films: DATA.films,
  count: SHOW.count,
  activeFilm: SHOW.activeFilm,
  isLoading: DATA.isLoading
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
    dispatch(ActionCreator.checkStatus())
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
