import React from 'react';

const NewsItem = props => {
  const { imgSrc, key, title, date } = props

  return (
    <div className="news-item">
      <img src={require(`../../assets/${imgSrc}`)} alt={`news-item${key}`} />
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
