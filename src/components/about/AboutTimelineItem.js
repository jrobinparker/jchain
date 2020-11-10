import React from 'react';

const AboutTimelineItem = ({ date, about }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-point">
      </div>
      <div className="timeline-text">
        <div className="timeline-date">{date}</div>
        <div>{about}</div>
      </div>
    </div>
  )
}

export default AboutTimelineItem
