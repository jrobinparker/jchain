import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import gsap from "gsap";

const Box = ({children}) => {

  function showBox(isVisible) {
    const box = document.querySelector('.box')
    gsap.set(box, { y: 100 })

    if (isVisible) {
      gsap.to(box, .5, {y: -5, opacity: 1})
    }
  }

  return (
    <VisibilitySensor
        partialVisibility
        onChange={isVisible => {
          showBox(isVisible)
      }}>
      <div className="box">
        {children}
      </div>
    </VisibilitySensor>
  )
}

export default Box;
