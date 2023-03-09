import React, { useState } from 'react'
// import Team from '../Team/Team'
import { Navigate } from 'react-router-dom'

export default function Resources() {
  function handleNavigateTeam() {
    Navigate('/team')
  }

  return (
    <main className="Resources">
      <>
        <h1>Resources</h1>
        {/* link for team page */}
        <footer>
          <p onClick={handleNavigateTeam}>Team</p>
        </footer>
      </>
    </main>
  )
}
