import React, { useEffect } from 'react';
import AboutTimelineItem from './AboutTimelineItem';
import VisibilitySensor from 'react-visibility-sensor';
import gsap from "gsap";

const AboutTimeline = () => {

  function timelineExpand(isVisible) {
    const items = document.querySelectorAll('.timeline-item')
    const item1 = document.querySelectorAll('.timeline-item')[0]
    const item2 = document.querySelectorAll('.timeline-item')[1]
    const item3 = document.querySelectorAll('.timeline-item')[2]
    const item4 = document.querySelectorAll('.timeline-item')[3]
    const item5 = document.querySelectorAll('.timeline-item')[4]
    const tl = gsap.timeline();

    if (isVisible && window.matchMedia('(orientation: landscape)').matches) {

      gsap.set("#timeline", {width: '1%', height: '2.5px'})
      gsap.set(items, {opacity: 0, y: 0})

      tl
        .to("#timeline", 1.25, {width: '95%', height: '2.5px'})
        .to(item1, .25, { y: -5, opacity: 1 })
        .to(item2, .25, { y: -5, opacity: 1 })
        .to(item3, .25, { y: -5, opacity: 1 })
        .to(item4, .25, { y: -5, opacity: 1 })
        .to(item5, .25, { y: -5, opacity: 1 })
      }

    if (isVisible && window.matchMedia('(orientation: portrait)').matches) {
        gsap.set("#timeline", {height: '.1%', width: '3px'})
        gsap.set(items, {opacity: 0})

        tl
          .to("#timeline", 1.25, {height: '70%', width: '3px'})
          .to(item1, .25, { x: -5, opacity: 1 })
          .to(item2, .25, { x: 5, opacity: 1 })
          .to(item3, .25, { x: -5, opacity: 1 })
          .to(item4, .25, { x: -5, opacity: 1 })
          .to(item5, .25, { x: -5, opacity: 1 })
      }
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      timelineExpand()
    })
  }, [])

    return (
      <div className="timeline">
        <h1>development timeline</h1>
        <p>we started in january 2018 and continue to develop, improve, and expand jchain</p>
        <VisibilitySensor
          partialVisibility
            onChange={isVisible => {
              timelineExpand(isVisible)
            }
          }>
          <div id="timeline">
            <div id="timeline-items">
              <AboutTimelineItem date={'1/2018'} about={'released jchain whitepaper'} />
              <AboutTimelineItem date={'3/2018'} about={'began development of blockchain'} />
              <AboutTimelineItem date={'3/2019'} about={'mined genesis block'} />
              <AboutTimelineItem date={'1/2020'} about={'partnered with 25 blockchains and 10 e-commerce apps'} />
              <AboutTimelineItem date={'9/2020'} about={'beta sdk release date'} />
            </div>
          </div>
        </VisibilitySensor>
      </div>
    )
}

export default AboutTimeline;
