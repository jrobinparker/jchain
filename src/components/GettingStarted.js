import React from 'react';
import { ReactComponent as Start } from '../backlink.svg';


export default function GettingStarted() {
  return (
    <div className="getting-started" id="getting-started">
    <div className="getting-started-content">
      <h1>ready to get started?</h1>
      <h4>it's easier than ever</h4>
        <div className="getting-started-overview">
          <Start />
          <div className="getting-started-text">
            <p>our ultra-simple SDK makes it easy to get started linking your blockchain up to the jchain network</p>
            <div className="getting-started-button">
              get started!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
