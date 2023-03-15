import './Team.css'
import scott from '../../assets/scott.jpeg'
import pault from '../../assets/PaulT.jpeg'
import eddie from '../../assets/eddie.jpeg'
import pauls from '../../assets/PaulS.jpeg'
import quentin from '../../assets/quentin.jpeg'
import pickle from '../../assets/pickle.png'

import React from 'react'

export default function Team({ darkMode }) {

  const pickleUnlocked = localStorage.getItem('Pickle', 'Unlocked')

  return (
    <main className="TeamContainer">
      <div className="TeamHeader">
        <h1>Team</h1>
      </div>
      <div className="TeamMain">
        <div className="TeamMemberCard">
          <img className="headshots" alt="Scott Ankiewicz" src={scott}></img>
          <h3>Scott Ankiewicz</h3>
          <a
            class="LinkedIn"
            href="https://www.linkedin.com/in/scott-ankiewicz/"
          >
            LinkedIn
          </a>
        </div>
        <div className="TeamMemberCard">
          <img className="headshots"alt="Paul Truitt" src={pault}></img>
          <h3>Paul Truitt</h3>
          <a class="LinkedIn" href="https://www.linkedin.com/in/paultruittdev/">
            LinkedIn
          </a>
        </div>
        <div className="TeamMemberCard">
          <img className="headshots" alt="Eddie Hernandez" src={eddie}></img>
          <h3>Eddie Hernandez</h3>
          <a class="LinkedIn" href="https://www.linkedin.com/in/edhz/">
            LinkedIn
          </a>
        </div>
        <div className="TeamMemberCard">
          <img className="headshots" alt="Paul Seabrook" src={pauls}></img>
          <h3>Paul Seabrook</h3>
          <a
            class="LinkedIn"
            href="https://www.linkedin.com/in/paulwarrenseabrook/"
          >
            LinkedIn
          </a>
        </div>
        <div className="TeamMemberCard">
          <img className="headshots" alt="Quentin Lee" src={quentin}></img>
          <h3>Quentin Lee</h3>
          <a class="LinkedIn" href="https://www.linkedin.com/in/quentinjlee/">
            LinkedIn
          </a>
        </div>
        <div className="TeamMemberCard"
        style={{display: pickleUnlocked ? darkMode ? '' : 'none' : 'none'}}
        >
          <img
            className="pickle"
            alt="pickle the cat"
            src={pickle}
          ></img>
          <h3>Pickle the Cat</h3>
          <a
            class="LinkedIn"
            href="https://www.foodreference.com/html/fpickles.html"
            target="_blank"
          >
            Pickle Facts
          </a>
        </div>
      </div>
    </main>
  )
}
