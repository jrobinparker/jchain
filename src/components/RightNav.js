import React from 'react';

export default function RightNav() {
  return (
    <nav className="right-nav">
      <div className="right-nav-links">
        <div className="right-nav-link">
          <div
            className="nav-button"
            onClick={() => document
              .getElementById("about")
              .scrollIntoView({behavior: 'smooth'})}
            >
          </div>
          <div className="right-nav-text-1">what is jchain</div>
        </div>

        <div className="right-nav-link">
          <div
            className="nav-button"
            onClick={() => document
              .getElementById("getting-started")
              .scrollIntoView({behavior: 'smooth'})}
            >
          </div>
          <div className="right-nav-text-2">getting started</div>
        </div>

        <div className="right-nav-link">
          <div
            className="nav-button"
            onClick={() => document
              .getElementById("meet-team")
              .scrollIntoView({behavior: 'smooth'})}
          >
          </div>
          <div className="right-nav-text-3">meet the team</div>
        </div>
      </div>
    </nav>
  )
}
