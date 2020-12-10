import React, { useEffect } from 'react';
import { Timeline } from '../components';
import VisibilitySensor from 'react-visibility-sensor';
import gsap from "gsap";
import timelineData from '../data/timeline.json';

export default function TimelineContainer() {

  return (
    <Timeline>
      <Timeline.Header>Development timeline</Timeline.Header>
      <Timeline.Subtitle>We started in january 2018 and continue to develop, improve, and expand jchain</Timeline.Subtitle>
        <Timeline.Frame>
          <Timeline.Line>
            <Timeline.Group>
              {timelineData.map(item => {
                return (
                  <Timeline.Item>
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
    </Timeline>
  )
}
