import React from 'react';
import { ReactComponent as Register } from '../assets/card.svg';
import { ReactComponent as Handshake } from '../assets/handshake.svg';
import { ReactComponent as Connect } from '../assets/networking.svg';


export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-content">
        <h1>what is jchain?</h1>
        <h4>jchain's blockchain network offers unparalleled interoperability across blockchains</h4>
        <div className="about-overview hidden">
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
}
