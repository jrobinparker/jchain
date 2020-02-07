import React from 'react';
import AboutGrid from './AboutGrid';
import AboutTimeline from './AboutTimeline';

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <AboutGrid />
        <AboutTimeline />
      </div>
    </div>
  )
}

export default About
