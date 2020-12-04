import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import gsap from "gsap";

const Box = (props) => {

  function showBox(isVisible) {
    const box = document.querySelectorAll('.box')[props.num]

    if (isVisible) {
      gsap.to(box, .5, { opacity: 1 })
    }
  }

  return (
    <VisibilitySensor
        partialVisibility
        onChange={isVisible => {
          showBox(isVisible)
      }}>
      <div className="box">
        {props.children}
      </div>
    </VisibilitySensor>
  )
}

export default Box;
