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

    function setScrollIndicator() {
      let scrollPercent = window.scrollY / 1000
      let nav = document.getElementById("nav")
      if (scrollPercent >= 1) {
        nav.style.backgroundColor = 'rgba(0,110,106,1)';
        nav.style.boxShadow = '0px 0px 21px 0px rgba(10,10,10,.7)'
      } else {
        nav.style.backgroundColor = `rgba(0,110,106,${scrollPercent})`;
        nav.style.boxShadow = `0px 0px 21px 0px rgba(10,10,10,${scrollPercent})`
      }
      console.log(scrollPercent)
    }

    document.body.onscroll = () => {
      setScrollIndicator()
    }
  }

  render() {

  return (
    <div className="App" id="App">
      <div className="bg">
        <Nav />
        <Banner />
        <RightNav />
        <About />
        <GettingStarted />
        <MeetTeam />
        <Footer />
      </div>
    </div>
  )
}
}

export default App;
