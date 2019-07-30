import React from 'react';
import { ReactComponent as Register } from '../assets/card.svg';
import { ReactComponent as Handshake } from '../assets/handshake.svg';
import { ReactComponent as Connect } from '../assets/networking.svg';
import VisibilitySensor from 'react-visibility-sensor';


class About extends React.Component {
  state = {
    visible: false
  }

  render() {
    if (this.state.visible) {
      const about = document.querySelector('.about-overview')
      about.classList.remove('hidden');
      about.classList.add('fade-in-up');
    }

  return (
    <div className="about" id="about">

      <div className="about-content">
        <h1>what is jchain?</h1>
        <h4>jchain's blockchain network offers unparalleled interoperability across blockchains</h4>
        <VisibilitySensor
          partialVisibility
          onChange={isVisible => {
            this.setState({
              visible: isVisible
            })
          }}>
        <div className="about-overview hidden" id="overview">
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
        </VisibilitySensor>
      </div>
    </div>
  )
}
}

export default About
