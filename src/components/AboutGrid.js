import React from 'react';
import { ReactComponent as Barrier } from '../assets/barrier.svg';
import { ReactComponent as Timer } from '../assets/timer.svg';
import { ReactComponent as Handshake } from '../assets/handshake.svg';
import VisibilitySensor from 'react-visibility-sensor';
import { gsap } from "gsap";

class AboutGrid extends React.Component {
  state = {
    visible: false
  }

  gridTimeline() {
    const item1 = document.querySelectorAll('.grid-item')[0]
    const item2 = document.querySelectorAll('.grid-item')[1]
    const item3 = document.querySelectorAll('.grid-item')[2]

    const timelineExpand = gsap.timeline();

    timelineExpand
      .to(item1, .5, { y: -5, opacity: 1 })
      .to(item2, .5, { y: -5, opacity: 1 })
      .to(item3, .5, { y: -5, opacity: 1 })
    }

  render() {
    if (this.state.visible) {
      this.gridTimeline()
    }

    return (
      <div className="about-content">
        <h1>what is jchain?</h1>
        <p>first envisioned in 2018 by cryptocurrency pioneers, jchain's blockchain network offers unparalleled interoperability across blockchains.</p>
        <p>jchain has developed rapidly since inception and continues to expand by partnering with leading blockchains and exchanges.</p>
        <VisibilitySensor
          partialVisibility
            onChange={isVisible => {
              this.setState({
                visible: isVisible
              })
          }}>
        <div className="about-grid">
          <div className="grid-item">
            <Barrier id="barrier" />
            <h2>low barrier of entry</h2>
            <p>easy to use transactions interface</p>
            <p>quickly integrate with your website with widgets</p>
          </div>
          <div className="grid-item">
            <Timer id="timer" />
            <h2>blazing fast</h2>
            <p>processes transactions faster than the leading blockchains</p>
            <p>best-in-class server performance</p>
          </div>
          <div className="grid-item">
            <Handshake id="handshake" />
            <h2>easily compatible</h2>
            <p>massively interoperablity for high-level integration and collaboration</p>
            <p>handles fiat payments</p>
          </div>
        </div>
        </VisibilitySensor>
      </div>
    )
  }
}

export default AboutGrid
