import React from 'react';
import Nav from './components/Nav';
import Banner from './components/Banner';
import About from './components/About';
import GettingStarted from './components/GettingStarted';
import MeetTeam from './components/MeetTeam';
import RightNav from './components/RightNav';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {

  componentDidMount() {

    const app = document.body

    function setNavStyle() {
      const scrollPercent = window.scrollY / 1000
      const nav = document.getElementById("nav")
      if (scrollPercent >= 1) {
        nav.style.backgroundColor = 'rgba(0,110,106,1)';
        nav.style.boxShadow = '0px 0px 21px 0px rgba(10,10,10,.7)'
      } else {
        nav.style.backgroundColor = `rgba(0,110,106,${scrollPercent})`;
        nav.style.boxShadow = `0px 0px 21px 0px rgba(10,10,10,${scrollPercent})`
      }
    }

    function addFadeIn() {
      const scrollPos = window.scrollY
      const overview = document.querySelector(".about-overview")
      const gettingStarted = document.querySelector(".getting-started-overview")
      const meetTeam = document.querySelector(".meet-team-photos")
      if (scrollPos >= 819) {
        overview.classList.remove('hidden');
        overview.classList.add('fade-in-up')
      }

      if (scrollPos >= 1565) {
        gettingStarted.classList.remove('hidden');
        gettingStarted.classList.add('fade-in-up')
      }

      if (scrollPos >= 2311) {
        meetTeam.classList.remove('hidden');
        meetTeam.classList.add('fade-in-up')
      }
    }

    app.onscroll = () => {
      setNavStyle()
      addFadeIn()
    }
  }

  render() {

  return (
    <div className="App" id="App">
      <div className="bg">
        <Nav />
        <div className="container">
          <Banner />
          <RightNav />
          <About />
          <GettingStarted />
          <MeetTeam />
        </div>
        <Footer />
      </div>
    </div>
  )
}
}

export default App;
