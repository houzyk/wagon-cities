// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// reducers
import citiesReducer from './reducers/cities_reducer';
// import activeCityReducer from './reducers/active_city_reducer';

// State and reducers
const reducers = combineReducers({
  cities: citiesReducer
});

// render an instance of the component in the DOM
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>,
    root
  );
}
