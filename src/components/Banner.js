import React from 'react';
import { ReactComponent as Blocks } from '../Blocks.svg';

class Banner extends React.Component {
  render() {

  return (
    <div className="banner" id="banner">
      <div className="banner-content">
        <div className="banner-text">
          <span className="banner-header">building the future</span>
          jchain: the next generation blockchain network
          <div className="banner-button" onClick={() => document.getElementById("about").scrollIntoView({behavior: 'smooth'})}>what is jchain?</div>
        </div>
          <Blocks className="banner-image" />
      </div>
    </div>
  )
}
}

export default Banner
