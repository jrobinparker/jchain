import React from 'react';

export default function Nav() {
  return (
    <nav className="nav" id="nav">
      <div
        style={{ marginLeft: '5%' }}
        onClick={() =>
          document
          .getElementById("App")
          .scrollIntoView({behavior: 'smooth'})}
        >
        jchain
      </div>
      <div className="nav-links">
        <div onClick={() =>
          document
            .getElementById("about")
            .scrollIntoView({behavior: 'smooth'})}
        >
          what is jchain?
        </div>
        <div onClick={() =>
          document
            .getElementById("getting-started")
            .scrollIntoView({behavior: 'smooth'})}
        >
          getting started
        </div>
        <div onClick={() =>
          document
            .getElementById("meet-team")
            .scrollIntoView({behavior: 'smooth'})}
        >
          meet the team
        </div>
      </div>
    </nav>
  )
}
