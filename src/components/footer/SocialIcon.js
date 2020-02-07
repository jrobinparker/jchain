import React from 'react';

const SocialIcon = props => {
  const { icon } = props
  return (
    <i className={`fab ${icon}`} />
  )
}

export default SocialIcon
