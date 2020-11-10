import React from 'react';

const AboutGridItem = ({ img, heading, p1, p2 }) => {
  return (
    <div className="grid-item">
      {img}
      <h2>{heading}</h2>
      <p>{p1}</p>
      <p>{p2}</p>
    </div>
  )
}

export default AboutGridItem