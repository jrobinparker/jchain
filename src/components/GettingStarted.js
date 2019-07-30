import React from 'react';
import { ReactComponent as Start } from '../assets/backlink.svg';
import VisibilitySensor from 'react-visibility-sensor';


class GettingStarted extends React.Component {
  state = {
    visible: false
  }

  render() {
    if (this.state.visible) {
      const gettingStarted = document.querySelector('.getting-started-overview')
      gettingStarted.classList.remove('hidden');
      gettingStarted.classList.add('fade-in-up');
    }

  return (
    <div className="getting-started" id="getting-started">
    <div className="getting-started-content">
      <h1>ready to get started?</h1>
      <h4>it's easier than ever</h4>
      <VisibilitySensor
        partialVisibility
        onChange={isVisible => {
          this.setState({
            visible: isVisible
          })
        }}>
        <div className="getting-started-overview hidden">
          <Start />
          <div className="getting-started-text">
            <p>our ultra-simple SDK makes it easy to link your blockchain up to the jchain network</p>
            <div className="getting-started-button">
              get started!
            </div>
          </div>
        </div>
        </VisibilitySensor>
      </div>
    </div>
  )
}
}

export default GettingStarted
