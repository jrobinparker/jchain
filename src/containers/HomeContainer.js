import React, { Fragment } from 'react';
import NavContainer from './NavContainer';
import BannerContainer from './BannerContainer';
import AboutContainer from './AboutContainer';
import TimelineContainer from './TimelineContainer';
import GettingStartedContainer from './GettingStartedContainer';
import NewsContainer from './NewsContainer';
import FooterContainer from './FooterContainer';

export default function HomeContainer() {
  return (
    <Fragment>
      <NavContainer />
      <BannerContainer />
      <AboutContainer />
      <TimelineContainer />
      <GettingStartedContainer />
      <NewsContainer />
      <FooterContainer />
    </Fragment>
  )
}
