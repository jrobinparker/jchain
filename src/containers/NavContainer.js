import React from 'react';
import { Nav } from '../components';

export default function NavContainer() {
  return (
    <Nav>
      <Nav.Brand>
        jchain
      </Nav.Brand>
      <Nav.Group>
        <Nav.Link
          onClick={() => document.querySelector(".about-frame").scrollIntoView({behavior: 'smooth'})}
        >
          getting started
        </Nav.Link>
        <Nav.Link
          onClick={() => document.querySelector(".news-container").scrollIntoView({behavior: 'smooth'})}
        >
          news
        </Nav.Link>
        <Nav.Link to='/signin'>
          sign in
        </Nav.Link>
      </Nav.Group>
    </Nav>
  )
}
