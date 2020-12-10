import React from 'react';
import Box from './Box';
import gsap from "gsap";

const GettingStarted = () => {
  function addButtonStyle() {
    const button = document.querySelector('.getting-started-button')
    gsap.to(button, .25, {backgroundColor: 'rgb(0, 92, 136)', boxShadow: '2px 10px 21px 0px rgba(0,0,0,0.55)'})
    }

  function removeButtonStyle() {
    const button = document.querySelector('.getting-started-button')
    gsap.to(button, .25, {backgroundColor: '', boxShadow: ''})
    }

  return (
    <div className="getting-started">
      <Box num={2}>
      <div className="getting-started-content">
        <h1>ready to get started?</h1>
            <div className="getting-started-overview">
              <div className="getting-started-steps">
                <div className="getting-started-text">
                  <p>get up and running in less than 10 minutes with our quick start guide.</p>
                  <div className="getting-started-button" onMouseEnter={() => addButtonStyle()} onMouseLeave={() => removeButtonStyle()}>get started <i className="fas fa-arrow-circle-right" /></div>
                </div>
                <div className="getting-started-img">
                  <img src='../../laptop.png' id="laptop" alt="laptop"/>
                </div>
              </div>
            </div>
        </div>
        </Box>
      </div>
  )
}

export default GettingStarted
