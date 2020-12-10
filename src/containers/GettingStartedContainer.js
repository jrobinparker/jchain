import React from 'react';
import { GettingStarted } from '../components';

export default function GettingStartedContainer() {
  return (
    <GettingStarted>
        <GettingStarted.Frame>
          <GettingStarted.Title>Ready to get started?</GettingStarted.Title>
          <GettingStarted.Subtitle>get up and running in less than 10 minutes with our quick start guide.</GettingStarted.Subtitle>
          <GettingStarted.Button>get started <i className="fas fa-arrow-circle-right" /></GettingStarted.Button>
        </GettingStarted.Frame>
        <GettingStarted.Image src='laptop' />
    </GettingStarted>
  )
}
