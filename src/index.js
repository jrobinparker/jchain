import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './global-styles';
import { FirebaseContext } from './context/firebase';
import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
    apiKey: "AIzaSyAQw9UOukrDPYGjBPu7XWEnzzIzrHvzXvw",
    authDomain: "jchain-dd07f.firebaseapp.com",
    projectId: "jchain-dd07f",
    storageBucket: "jchain-dd07f.appspot.com",
    messagingSenderId: "892647016255",
    appId: "1:892647016255:web:0a0d2dbb7abaa43b87b58a",
    measurementId: "G-NH0977BCDJ"
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

serviceWorker.unregister();
