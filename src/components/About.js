import React from 'react';
import AboutGrid from './AboutGrid';
import AboutTimeline from './AboutTimeline';

export default function About() {

  return (
    <div id="about">
      <div className="about">
        <AboutGrid />
        <AboutTimeline />
      </div>
    </div>
  )

}
