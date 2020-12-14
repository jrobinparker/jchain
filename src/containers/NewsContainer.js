import React from 'react';
import { News } from '../components';
import newsData from '../data/news.json';
import VisibilitySensor from 'react-visibility-sensor';
import { gsap } from "gsap";

export default function NewsContainer() {

  function displayItems(isVisible) {
    const container = document.querySelector('.news-container')
    const item1 = document.querySelectorAll('.news-item')[0]
    const item2 = document.querySelectorAll('.news-item')[1]
    const item3 = document.querySelectorAll('.news-item')[2]
    const item4 = document.querySelectorAll('.news-item')[3]
    const item5 = document.querySelectorAll('.news-item')[4]
    const item6 = document.querySelectorAll('.news-item')[5]

    const displayItems = gsap.timeline();

    if (isVisible) {
      displayItems
        .to(container, .5, { opacity: 1 })
        .to(item1, .5, { y: -5, opacity: 1 })
        .to(item2, .25, { y: -5, opacity: 1 })
        .to(item3, .25, { y: -5, opacity: 1 })
        .to(item4, .25, { y: -5, opacity: 1 })
        .to(item5, .25, { y: -5, opacity: 1 })
        .to(item6, .25, { y: -5, opacity: 1 })
    }
  }

  return (
    <VisibilitySensor
      partialVisibility
      onChange={isVisible => displayItems(isVisible)}
      >
    <News
      className="news-container"
      >
      <News.Header>News</News.Header>
      <News.Subheader>Latest news, updates, and more from the dev team</News.Subheader>
      <News.Frame>
        {newsData.map(item => {
          return (
            <News.Item
              className='news-item'
            >
              <News.Image src={item.image} />
              <News.Title>{item.title}</News.Title>
              <News.Date>{item.date}</News.Date>
            </News.Item>
            )
          })}
      </News.Frame>
    </News>
    </VisibilitySensor>
  )
}
