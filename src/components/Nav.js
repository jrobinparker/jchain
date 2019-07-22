import React from 'react';

export default function Nav() {

  return (
    <nav className="nav" id="nav">
      <a style={{ marginLeft: '5%' }}>jchain</a>
      <div className="nav-links">
        <a onClick={() => document.getElementById("about").scrollIntoView({behavior: 'smooth'})}>what is jchain?</a>
        <a onClick={() => document.getElementById("getting-started").scrollIntoView({behavior: 'smooth'})}>getting started</a>
        <a onClick={() => document.getElementById("meet-team").scrollIntoView({behavior: 'smooth'})}>meet the team</a>
      </div>
    </nav>
  )
}
