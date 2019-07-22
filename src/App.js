import React from 'react';
import Nav from './components/Nav';
import Banner from './components/Banner';
import About from './components/About';
import GettingStarted from './components/GettingStarted';
import MeetTeam from './components/MeetTeam';
import RightNav from './components/RightNav';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="bg">
      <Nav />
      <Banner />
      <RightNav />
      <About />
      <GettingStarted />
      <MeetTeam />
      </div>
    </div>
  );
}

export default App;
