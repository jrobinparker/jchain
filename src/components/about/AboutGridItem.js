import React from 'react';

const AboutGridItem = props => {
  const { img, heading, p1, p2 } = props
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
