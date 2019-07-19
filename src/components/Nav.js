import React from 'react';

export default function Nav() {
  return (
    <nav className="nav">
      <a style={{ marginLeft: '5%' }}>jchain</a>
      <div className="nav-links">
        <a onClick={() => document.getElementById("about").scrollIntoView({behavior: 'smooth'})}>what is jchain?</a>
        <a>getting started</a>
        <a>meet the team</a>
        <a>our advisors</a>
      </div>
    </nav>
  )
}
