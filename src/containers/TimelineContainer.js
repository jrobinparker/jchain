import React, { useEffect } from 'react';
import { Timeline } from '../components';
import VisibilitySensor from 'react-visibility-sensor';
import gsap from "gsap";
import timelineData from '../data/timeline.json';

export default function TimelineContainer() {

  function displayItems(isVisible) {
    const timelineContainer = document.querySelector('.timeline-container')

    const displayItems = gsap.timeline();

    if (isVisible) {
      displayItems
        .to(timelineContainer, 1, { opacity: 1 })
    }
  }

  function timelineExpand(isVisible, resize) {
    const item1 = document.querySelectorAll('.timeline-item')[0]
    const item2 = document.querySelectorAll('.timeline-item')[1]
    const item3 = document.querySelectorAll('.timeline-item')[2]
    const item4 = document.querySelectorAll('.timeline-item')[3]
    const item5 = document.querySelectorAll('.timeline-item')[4]
    const timeline = document.querySelector('.timeline')
    const tl = gsap.timeline();

    if (isVisible || resize) {
      if (window.matchMedia('(orientation: landscape)').matches) {

          tl
            .to(timeline, 1.25, {delay: 0.5, opacity: 1, width: '100%', height: '2.5px'})
            .to(item1, .25, { y: -5, opacity: 1 })
            .to(item2, .25, { y: -5, opacity: 1 })
            .to(item3, .25, { y: -5, opacity: 1 })
            .to(item4, .25, { y: -5, opacity: 1 })
            .to(item5, .25, { y: -5, opacity: 1 })

      }

    if (window.matchMedia('(orientation: portrait)').matches) {

        tl
          .to(timeline, 1.25, {opacity: 1, height: '100%', width: '2.5px'})
          .to(item1, .25, { x: -5, opacity: 1 })
          .to(item2, .25, { x: -5, opacity: 1 })
          .to(item3, .25, { x: -5, opacity: 1 })
          .to(item4, .25, { x: -15, opacity: 1 })
          .to(item5, .25, { x: -5, opacity: 1 })

      }
    }

  }

  function resetTimeline() {
    const items = document.querySelectorAll('.timeline-item')
    const timeline = document.querySelector('.timeline')

    gsap.to(items, {opacity: 0, y: 0})
    gsap.to(timeline, {opacity: 0, width: '2.5px', height: '2.5px'})
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      resetTimeline()
      setTimeout(() => {
        timelineExpand(true)
      }, 1000)
    })
  }, [])

  return (
      <Timeline
        className="timeline-container"
      >
      <Timeline.Header>Development timeline</Timeline.Header>
      <Timeline.Subtitle>We started in january 2018 and continue to develop, improve, and expand jchain</Timeline.Subtitle>
      <VisibilitySensor
        onChange={isVisible => {
          displayItems(isVisible)
          timelineExpand(isVisible)
        }}>
        <Timeline.Frame>
          <Timeline.Line
            className="timeline"
          >
            <Timeline.Group>
              {timelineData.map(item => {
                return (
                  <Timeline.Item
                    className="timeline-item"
                  >
                    <Timeline.Point />
                    <Timeline.Text>
                      {item.date}
                      <br />
                      {item.text}
                    </Timeline.Text>
                  </Timeline.Item>
                )
              })}
            </Timeline.Group>
          </Timeline.Line>
        </Timeline.Frame>
        </VisibilitySensor>
    </Timeline>
  )
}
