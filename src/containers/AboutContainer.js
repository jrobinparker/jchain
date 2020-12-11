import React, { useRef, useEffect } from 'react';
import { About } from '../components';
import aboutData from '../data/about.json';
import gsap from "gsap";
import VisibilitySensor from 'react-visibility-sensor';

export default function AboutContainer() {
  return (
    <About>
      <About.Header>What is jchain?</About.Header>
      <About.Subtitle>
        First envisioned in 2018 by cryptocurrency pioneers, jchain's blockchain network offers unparalleled interoperability across blockchains.
      </About.Subtitle>
      <About.Subtitle>
        jchain has developed rapidly since inception and continues to expand by partnering with leading blockchains and exchanges.
      </About.Subtitle>
      {aboutData.map(item => {
        return (
          <About.Frame>
          <About.Item>
            <About.FrameHeader>
              {item.header}
            </About.FrameHeader>
            <About.FrameSubtitle>
              {item.subtitle}
            </About.FrameSubtitle>
          </About.Item>
          <About.Image
            src={`${item.image}`}
          />
        </About.Frame>
        )})}
    </About>
  )
}
