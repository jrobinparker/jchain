import React from 'react';
import Nav from './components/Nav';
import Banner from './components/Banner';
import AboutContainer from './containers/AboutContainer';
import GettingStarted from './components/GettingStarted';
import News from './components/news/News';
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
      setNavStyle()
    }

  return (
    <div className="App" id="App">
      <div className="bg">
        <Nav />
          <div className="container">
            <Banner />
            <AboutContainer />
            <GettingStarted />
            <News />
          </div>
          <Footer />
        </div>
    </div>
  )
}

export default App;
