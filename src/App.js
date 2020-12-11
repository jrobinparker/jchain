import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';

import './App.css';

const App = () => {

    const app = document.body

    function setNavStyle() {
      const scrollPercent = window.scrollY / 1000
      const nav = document.getElementById("nav")
      if (scrollPercent >= 1) {
        nav.style.backgroundColor = 'rgba(0,100,147,1)';
        nav.style.boxShadow = '0px 0px 21px 0px rgba(10,10,10,.7)';
      } else {
        nav.style.backgroundColor = `rgba(0,100,147,${scrollPercent})`;
        nav.style.boxShadow = `0px 0px 21px 0px rgba(10,10,10,${scrollPercent})`;
      }
    }

    app.onscroll = () => {
    //  setNavStyle()
    }

  return (
    <Router>
      <Switch>
        <Route exact path to='/' component={HomeContainer} />
      </Switch>
    </Router>
  )
}

export default App;
