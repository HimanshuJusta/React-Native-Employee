import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

export default class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyA6Uw8ann-wSMFk6TzElNXSM-rqC4GqLL4',
      authDomain: 'manager-e66af.firebaseapp.com',
      databaseURL: 'https://manager-e66af.firebaseio.com',
      projectId: 'manager-e66af',
      storageBucket: '',
      messagingSenderId: '636148005772'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
