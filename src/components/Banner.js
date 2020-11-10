import React, { useEffect } from 'react';
import gsap from 'gsap';

const Banner = () => {
  useEffect(() => {
    const element1 = document.getElementById('path9210')
    if (element1) {
      alert(element1)
    }
  })
  return (
    <div className="banner" id="banner">
      <img src={require('../assets/nodes-and-server3.png')} className="banner-img" alt="banner"/>
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
        </div>
      </div>
    </div>
  )
}

export default Banner
