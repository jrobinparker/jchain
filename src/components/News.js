import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { TimelineMax, TweenMax } from "gsap/all";

class News extends React.Component {
  state = {
    visible: false
  }

  displayItems() {
    const item1 = document.querySelectorAll('.news-item')[0]
    const item2 = document.querySelectorAll('.news-item')[1]
    const item3 = document.querySelectorAll('.news-item')[2]
    const item4 = document.querySelectorAll('.news-item')[3]
    const item5 = document.querySelectorAll('.news-item')[4]
    const item6 = document.querySelectorAll('.news-item')[5]

    const displayItems = new TimelineMax()

    displayItems
      .to(item1, .5, {y: -5, opacity: 1})
      .add(
        TweenMax.to(item2, .25, {
          y: -5,
          opacity: 1
        }))
        .add(
          TweenMax.to(item3, .25, {
            y: -5,
            opacity: 1
          }))
          .add(
            TweenMax.to(item4, .25, {
              y: -5,
              opacity: 1
            }))
            .add(
              TweenMax.to(item5, .25, {
                y: -5,
                opacity: 1
              }))
              .add(
                TweenMax.to(item6, .25, {
                  y: -5,
                  opacity: 1
                }))
  }

  render() {

  if (this.state.visible) {
    this.displayItems()
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
        onChange={isVisible => {
          this.setState({
            visible: isVisible
          })
        }}>
      <div className="news-items">
        <div className="news-item">
          <img src={require('../assets/whitepaper.jpg')} alt="news-item1" />
          <div className="news-item-title">
            whitepaper released
          </div>
          <small>
          january 1, 2018
          </small>
        </div>
        <div className="news-item">
          <img src={require('../assets/dev-team.jpg')} alt="news-item2" />
          <div className="news-item-title">
            meet the dev team
          </div>
          <small>
            march 15, 2018
          </small>
        </div>
        <div className="news-item">
          <img src={require('../assets/gen-block.jpg')} alt="news-item3" />
          <div className="news-item-title">
            genesis block mined
          </div>
          <small>
            march 1, 2019
          </small>
        </div>
        <div className="news-item">
          <img src={require('../assets/partnerships.jpg')} alt="news-item4" />
          <div className="news-item-title">
            new partnerships
          </div>
          <small>
            october 20, 2019
          </small>
        </div>
        <div className="news-item">
          <img src={require('../assets/sdk.jpg')} alt="news-item5" />
          <div className="news-item-title">
            beta sdk update
          </div>
          <small>
            january 1, 2020
          </small>
        </div>
        <div className="news-item">
          <img src={require('../assets/qa.jpg')} alt="news-item6" />
          <div className="news-item-title">
            dev team q&A
          </div>
          <small>
            january 10, 2020
          </small>
        </div>
      </div>
      </VisibilitySensor>
      </div>
    </div>
  )
}}

export default News
