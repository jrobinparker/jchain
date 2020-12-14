import React from 'react';
import { GettingStarted } from '../components';
import gsap from "gsap";
import VisibilitySensor from 'react-visibility-sensor';

export default function GettingStartedContainer() {

  function displayItems(isVisible, order) {
    const frame = document.querySelector('.getting-started')
    const image = document.querySelector('.getting-started-image')

    const displayItems = gsap.timeline();

    if (isVisible) {
      displayItems
        .to(frame, 1, { x: -5, opacity: 1 })
        .to(image, .5, { x: -5, opacity: 1 })
    }
  }

  return (
    <VisibilitySensor
      onChange={isVisible => displayItems(isVisible)}>
      <GettingStarted>
        <GettingStarted.Frame
          className="getting-started"
        >
          <GettingStarted.Title>Ready to get started?</GettingStarted.Title>
          <GettingStarted.Subtitle>get up and running in less than 10 minutes with our quick start guide.</GettingStarted.Subtitle>
          <GettingStarted.Button>get started <i className="fas fa-arrow-circle-right" /></GettingStarted.Button>
        </GettingStarted.Frame>
        <GettingStarted.Image
          className="getting-started-image"
          src='laptop'
        />
    </GettingStarted>
    </VisibilitySensor>


  )
}
