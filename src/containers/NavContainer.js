import React from 'react';
import { Nav } from '../components';

export default function NavContainer() {
  return (
    <Nav>
      <Nav.Brand>
        jchain
      </Nav.Brand>
      <Nav.Group>
        <Nav.Link>
          getting started
        </Nav.Link>
        <Nav.Link>
          news
        </Nav.Link>
        <Nav.Link>
          login
        </Nav.Link>
      </Nav.Group>
    </Nav>
  )
}
