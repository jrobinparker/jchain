import React from 'react';
import Box from '../Box';
import AboutGrid from './AboutGrid';
import AboutTimeline from './AboutTimeline';

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <Box num={0}>
          <AboutGrid />
        </Box>
        <Box num={1}>
          <AboutTimeline />
        </Box>
      </div>
    </div>
  )
}

export default About
