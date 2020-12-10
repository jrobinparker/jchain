import React, { Fragment } from 'react';
import Nav from './components/Nav';
import Banner from './components/Banner';
import AboutContainer from './containers/AboutContainer';
import TimelineContainer from './containers/TimelineContainer';
import GettingStartedContainer from './containers/GettingStartedContainer';
import NewsContainer from './containers/NewsContainer';
import Footer from './components/footer/Footer';
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
    <Fragment>
      <Banner />
      <AboutContainer />
      <TimelineContainer />
      <GettingStartedContainer />
      <NewsContainer />
    <Footer />
    </Fragment>
  )
}

export default App;
