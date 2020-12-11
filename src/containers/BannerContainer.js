import React from 'react';
import { Banner } from '../components';

export default function BannerContainer() {
  return (
      <Banner>
        <Banner.Image src='nodes-and-server3' />
        <Banner.Frame>
          <Banner.Title>jchain: the next generation blockchain network</Banner.Title>
          <Banner.Button>What is jchain?</Banner.Button>
        </Banner.Frame>
      </Banner>
  )
}
