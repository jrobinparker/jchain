import React from 'react';

const NewsItem = ({ imgSrc, key, title, date }) => {

  return (
    <div className="news-item">
      <img src={`../${imgSrc}`} alt={`news-item${key}`} />
      <div className="news-item-title">
        {title}
      </div>
      <small>
        {date}
      </small>
    </div>
  )
}

export default NewsItem
