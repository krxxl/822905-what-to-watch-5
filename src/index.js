import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
// import films from './mocks/films';
// import reviews from './mocks/reviews';
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
// import {reducer} from './store/reducer';
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import rootReducer from "./store/reducers/root-reducer";
import {ActionCreator} from "./store/action";
import {fetchFilmList, checkAuth} from "./store/api-actions";
import {AuthorizationStatus} from "./constant/constant";

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(rootReducer, 
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
));

Promise.all([
  store.dispatch(fetchFilmList()),
  // store.dispatch(checkAuth()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
});
