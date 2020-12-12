import React, { Fragment } from 'react';
import NavContainer from '../containers/NavContainer';
import BannerContainer from '../containers/BannerContainer';
import AboutContainer from '../containers/AboutContainer';
import TimelineContainer from '../containers/TimelineContainer';
import GettingStartedContainer from '../containers/GettingStartedContainer';
import NewsContainer from '../containers/NewsContainer';
import FooterContainer from '../containers/FooterContainer';

export default function Home() {
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
