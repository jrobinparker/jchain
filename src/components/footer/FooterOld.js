import React from 'react';
import SocialIcon from './SocialIcon';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-item1">
          <h2>jchain</h2>
          <div className="footer-social">
            <SocialIcon icon={'fa-twitter'} />
            <SocialIcon icon={'fa-medium-m'} />
            <SocialIcon icon={'fa-reddit-alien'} />
            <SocialIcon icon={'fa-telegram-plane'} />
          </div>
        </div>
          <div className="footer-item2">
            <h2>about</h2>
              <div>about jchain</div>
              <div>our team</div>
              <div>our advisors</div>
              <div>exchanges</div>
          </div>
          <div className="footer-item3">
            <h2>resources</h2>
              <div>whitepaper</div>
              <div>jchain guides</div>
          </div>
      </div>
      <div className="footer-disclaimer">
        DISCLAIMER: this is a portfolio project by jeremy parker. jchain is not an actual blockchain app or cryptocurrency.
        Icons made by <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
    </footer>
  )
}

export default Footer
