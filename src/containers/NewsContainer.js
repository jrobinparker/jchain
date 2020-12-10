import React from 'react';
import { News } from '../components';
import newsData from '../data/news.json';

export default function NewsContainer() {
  return (
    <News>
      <News.Header>News</News.Header>
      <News.Subheader>Latest news, updates, and more from the dev team</News.Subheader>
      <News.Frame>
        {newsData.map(item => {
          return (
            <News.Item>
              <News.Image src={item.image} />
              <News.Title>{item.title}</News.Title>
              <News.Date>{item.date}</News.Date>
            </News.Item>
            )
          })}
      </News.Frame>
    </News>
  )
}
