import React from 'react';
import Nav from './components/Nav';
import Banner from './components/Banner';
import About from './components/About';
import GettingStarted from './components/GettingStarted';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <About />
      <GettingStarted />
    </div>
  );
}

export default App;
