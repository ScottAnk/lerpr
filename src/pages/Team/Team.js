import './Team.css'

import React, { useState } from 'react'

export default function Team() {
  const [user, setUser] = useState()

  return (
    <main className="TeamContainer">
      <div className="TeamHeader">
        <h1>Community</h1>
      </div>
      <div className="TeamMain">
        <div>
          <img></img>
          Scott Ankiewicz
          <ul>
            <li>
              <a>LinkedIn</a>
            </li>
          </ul>
        </div>
        <div>
          <img></img>
          Paul Truitt
          <ul>
            <li>
              <a>LinkedIn</a>
            </li>
          </ul>
        </div>
        <div>
          <img></img>
          Eddie Hernandez
          <ul>
            <li>
              <a>LinkedIn</a>
            </li>
          </ul>
        </div>
        <div>
          <img></img>
          Paul Seabrook
          <ul>
            <li>
              <a>LinkedIn</a>
            </li>
          </ul>
        </div>
        <div>
          <img></img>
          Quentin Lee
          <ul>
            <li>
              <a>LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
