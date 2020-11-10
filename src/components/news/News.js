import React from 'react';
import NewsItem from './NewsItem';
import VisibilitySensor from 'react-visibility-sensor';
import { gsap } from "gsap";

const News = () => {

  function displayItems(isVisible) {
    const item1 = document.querySelectorAll('.news-item')[0]
    const item2 = document.querySelectorAll('.news-item')[1]
    const item3 = document.querySelectorAll('.news-item')[2]
    const item4 = document.querySelectorAll('.news-item')[3]
    const item5 = document.querySelectorAll('.news-item')[4]
    const item6 = document.querySelectorAll('.news-item')[5]

    const displayItems = gsap.timeline();

    if (isVisible) {
      displayItems
        .to(item1, .5, { y: -5, opacity: 1 })
        .to(item2, .25, { y: -5, opacity: 1 })
        .to(item3, .25, { y: -5, opacity: 1 })
        .to(item4, .25, { y: -5, opacity: 1 })
        .to(item5, .25, { y: -5, opacity: 1 })
        .to(item6, .25, { y: -5, opacity: 1 })
    }
  }

  return (
    <div className="news" id="news">
    <div className="news-content">
      <div className="news-header">
        <h1>news</h1>
        <p>latest news, updates, and more from the dev team</p>
      </div>
      <VisibilitySensor
        partialVisibility
        onChange={isVisible => displayItems(isVisible)}>
      <div className="news-items">
        <NewsItem imgSrc={'whitepaper.jpg'} key={'1'} title={'whitepaper released'} date={'january 1, 2018'} />
        <NewsItem imgSrc={'dev-team.jpg'} key={'2'} title={'meet the dev team'} date={'march 15, 2018'} />
        <NewsItem imgSrc={'gen-block.jpg'} key={'3'} title={'genesis block mined'} date={'march 1, 2019'} />
        <NewsItem imgSrc={'partnerships.jpg'} key={'4'} title={'new partnerships'} date={'january 20, 2020'} />
        <NewsItem imgSrc={'sdk.jpg'} key={'5'} title={'beta sdk update'} date={'september 1, 2020'} />
        <NewsItem imgSrc={'qa.jpg'} key={'6'} title={'dev team q&a'} date={'october 10, 2020'} />
      </div>
      </VisibilitySensor>
      </div>
    </div>
  )
}

export default News
