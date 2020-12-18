import React, { Fragment, useContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './global-styles';
import { FirebaseContext } from './context/firebase';
import * as serviceWorker from './serviceWorker';
require('dotenv').config()

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APP_ID,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const firebase = window.firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Fragment>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </Fragment>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
