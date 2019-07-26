import React from 'react';
import { ReactComponent as Register } from '../card.svg';
import { ReactComponent as Handshake } from '../handshake.svg';
import { ReactComponent as Connect } from '../networking.svg';


class About extends React.Component {
  render() {
  return (
    <div className="about" id="about">
      <div className="about-content">
        <h1>what is jchain?</h1>
        <h4>jchain's blockchain network offers unparalleled interoperability across blockchains</h4>
        <div className="about-overview">
          <div className="feature">
            <div className="img">
              <Register />
            </div>
            <p>register your blockchain on jchain</p>
          </div>
          <div className="feature" id="about-select">
            <div className="img">
              <Handshake id="handshake"/>
            </div>
            <p>select blockchains to interact with</p>
          </div>
          <div className="feature">
            <div className="img">
              <Connect id="connect"/>
            </div>
            <p>jchain's API seamlessly connects your blockchain</p>
          </div>
        </div>
      </div>
    </div>
  )
}}

export default About
