import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { TimelineMax, TweenMax } from "gsap/all";

class AboutTimeline extends React.Component {
  state = {
    visible: false
  }

  timelineExpand() {
    const item1 = document.querySelectorAll('.timeline-item')[0]
    const item2 = document.querySelectorAll('.timeline-item')[1]
    const item3 = document.querySelectorAll('.timeline-item')[2]
    const item4 = document.querySelectorAll('.timeline-item')[3]
    const item5 = document.querySelectorAll('.timeline-item')[4]

    const timelineExpand = new TimelineMax()

    timelineExpand
      .to('#timeline', 1.25, {width: '95%'})
      .add(
        TweenMax.to(item1, .25, {
          y: -5,
          opacity: 1
        }))
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
  }

  render() {
    if (this.state.visible) {
      this.timelineExpand()
    }
    return (
      <div className="timeline">
        <h1>development timeline</h1>
        <p>we started in january 2018 and continue to develop, improve, and expand jchain</p>
        <VisibilitySensor
          partialVisibility
            onChange={isVisible => {
              this.setState({
                visible: isVisible
              })
          }}>
          <div id="timeline">
            <div id="timeline-items">
              <div className="timeline-item">
                <div className="timeline-point">
                </div>
                <div className="timeline-text">
                  <div className="timeline-date">1/2018</div>
                  <div>released jchain whitepaper</div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-point">
                </div>
                <div className="timeline-text">
                  <div className="timeline-date">3/2018</div>
                  <div>began development of blockchain</div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-point">
                </div>
                <div className="timeline-text">
                  <div className="timeline-date">3/2019</div>
                  <div>mined genesis block</div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-point">
                </div>
                <div className="timeline-text">
                  <div className="timeline-date">10/2019</div>
                  <div>partnered with 25 blockchains and 10 e-commerce apps</div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-point">
                </div>
                <div className="timeline-text">
                  <div className="timeline-date">5/2020</div>
                  <div>beta sdk release date</div>
                </div>
              </div>
            </div>
          </div>
        </VisibilitySensor>
      </div>
    )
  }
}

export default AboutTimeline;
