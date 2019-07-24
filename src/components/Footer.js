import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-item1">
          <h2>jchain</h2>
          <div className="footer-social">
            <i className="fab fa-twitter" />
            <i className="fab fa-medium-m" />
            <i className="fab fa-reddit-alien" />
            <i class="fab fa-telegram-plane" />
          </div>
        </div>
        <div className="footer-item2">
          <h2>about</h2>
            <a>about jchain</a>
            <a>our team</a>
            <a>our advisors</a>
            <a>exchanges</a>
        </div>
        <div className="footer-item3">
          <h2>resources</h2>
            <a>whitepaper</a>
            <a>jchain guides</a>
        </div>
      </div>
      <div className="footer-disclaimer">
        DISCLAIMER: this is a portfolio project by jeremy parker. jchain is not an actual blockchain app and there are no exchanges that offer the cryptocurrency.
      </div>
    </footer>
  )
}
