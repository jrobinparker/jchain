import React from 'react';

const Nav = () => {
  return (
    <nav className="nav" id="nav">
      <div
        className="nav-brand"
        onClick={() =>
          document
          .getElementById("App")
          .scrollIntoView({behavior: 'smooth'})}
        >
        jchain
      </div>
      <div className="nav-links">
        <div
          className="nav-link"
          onClick={() =>
          document
            .getElementById("about")
            .scrollIntoView({behavior: 'smooth'})}
        >
          what is jchain?
        </div>
        <div
          className="nav-link"
          onClick={() =>
          document
            .getElementById("getting-started")
            .scrollIntoView({behavior: 'smooth'})}
        >
          getting started
        </div>
        <div
          className="nav-link"
          onClick={() =>
          document
            .getElementById("news")
            .scrollIntoView({behavior: 'smooth'})}
        >
          news
        </div>
      </div>
    </nav>
  )
}

export default Nav
