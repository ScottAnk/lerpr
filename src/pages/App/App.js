import React, { useState } from 'react'
import Resources from '../Resources/Resources'
import Community from '../Community/Community'
import Editor from '../Editor/Editor'
import Header from '../../components/Header/Header'
import Team from '../Team/Team'
import { Routes, Route, Navigate } from 'react-router-dom'

import { getUser } from '../../utilities/users-service'
import './App.css'

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      <Header user={user} />

      <Routes>
        <Route path="/resources" element={<Resources />} />
        <Route path="/community" element={<Community />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/team" element={<Team />} />
        <Route path="/*" element={<Navigate to="/editor" />} />
      </Routes>
    </main>
  )
}
