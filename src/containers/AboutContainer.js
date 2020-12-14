import React, { useEffect, useState } from 'react';
import { About } from '../components';
import aboutData from '../data/about.json';
import gsap from "gsap";
import VisibilitySensor from 'react-visibility-sensor';

export default function AboutContainer() {

    function displayItems(isVisible, order) {
      const item1 = document.querySelectorAll('.about-frame')[order]

      const displayItems = gsap.timeline();

      if (isVisible) {
        displayItems
          .to(item1, 1, { x: -5, opacity: 1 })
      }
    }

  return (
    <About>
      <About.Header>What is jchain?</About.Header>
      <About.Subtitle>
        First envisioned in 2018 by cryptocurrency pioneers, jchain's blockchain network offers unparalleled interoperability across blockchains.
      </About.Subtitle>
      <About.Subtitle>
        jchain has developed rapidly since inception and continues to expand by partnering with leading blockchains and exchanges.
      </About.Subtitle>
      {aboutData.map((item, i) => {
        return (
          <VisibilitySensor
            onChange={isVisible => displayItems(isVisible, `${i}`)}>
          <About.Frame
            className="about-frame"
          >
          <About.Item>
            <About.FrameHeader>
              {item.header}
            </About.FrameHeader>
            <About.FrameSubtitle>
              {item.subtitle}
            </About.FrameSubtitle>
          </About.Item>
          <About.Image
            className="about-image"
            src={`${item.image}`}
          />
        </About.Frame>
        </VisibilitySensor>
        )})}
    </About>
  )
}
