import React from 'react';
import Nav from './components/Nav';
import Banner from './components/Banner';
import About from './components/About';
import GettingStarted from './components/GettingStarted';
import News from './components/News';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {

  render() {

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
            <About />
            <GettingStarted />
            <News />
          </div>
          <Footer />
        </div>
    </div>
  )
}
}

export default App;
