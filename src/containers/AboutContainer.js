import React from 'react';
import { About } from '../components';
import { ReactComponent as Barrier } from '../assets/barrier.svg';
import { ReactComponent as Timer } from '../assets/timer.svg';
import { ReactComponent as Handshake } from '../assets/handshake.svg';
import VisibilitySensor from 'react-visibility-sensor';
import gsap from "gsap";

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
    </About>
  )
}
