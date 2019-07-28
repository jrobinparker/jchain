import React from 'react';
import { ReactComponent as Blocks } from '../assets/Blocks.svg';

export default function Banner() {
  return (
    <div className="banner" id="banner">
      <div className="banner-content">
        <div className="banner-text">
          <span className="banner-header">building the future</span>
          jchain: the next generation blockchain network
          <div
            className="banner-button"
            id="banner-button-1"
            onClick={() => document.getElementById("about").scrollIntoView({behavior: 'smooth'})}
            >
            what is jchain?
          </div>
          <div
            className="banner-button"
            id="banner-button-2"
            onClick={() => document.getElementById("getting-started").scrollIntoView({behavior: 'smooth'})}
            >
            getting started
          </div>
          <div
            className="banner-button"
            id="banner-button-3"
            onClick={() => document.getElementById("meet-team").scrollIntoView({behavior: 'smooth'})}
            >
            meet the team
          </div>
        </div>
          <Blocks className="banner-image" />
      </div>
    </div>
  )
}
