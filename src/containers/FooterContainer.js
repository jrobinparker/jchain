import React from 'react';
import { Footer } from '../components';

export default function FooterContainer() {
  return (
    <Footer>
        <Footer.Frame>
          <Footer.Header>jchain</Footer.Header>
          <Footer.IconRow>
            <i className="fab fa-twitter" />
            <i className="fab fa-medium-m" />
            <i className="fab fa-reddit-alien" />
            <i className="fab fa-telegram-plane" />
          </Footer.IconRow>
        </Footer.Frame>
        <Footer.Frame>
            <Footer.Header>About</Footer.Header>
            <Footer.Link>About jchain</Footer.Link>
            <Footer.Link>Our team</Footer.Link>
            <Footer.Link>Our advisors</Footer.Link>
            <Footer.Link>Exchanges</Footer.Link>
        </Footer.Frame>
        <Footer.Frame>
          <Footer.Header>Resources</Footer.Header>
          <Footer.Link>Whitepaper</Footer.Link>
          <Footer.Link>SDK how-to</Footer.Link>
          <Footer.Link>FAQs</Footer.Link>
          <Footer.Link>Legal</Footer.Link>
        </Footer.Frame>
      <Footer.Disclaimer>
        DISCLAIMER: this is a portfolio project by jeremy parker. jchain is not an actual blockchain app or cryptocurrency.
        Icons made by <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </Footer.Disclaimer>
    </Footer>
  )
}
