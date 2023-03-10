import 'react-responsive-modal/styles.css'
import './App.css'
import React, { useState } from 'react'
import Resources from '../Resources/Resources'
import Community from '../Community/Community'
import Editor from '../Editor/Editor'
import Header from '../../components/Header/Header'
import Team from '../Team/Team'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Modal } from 'react-responsive-modal'
import { getUser } from '../../utilities/users-service'

export default function App() {
  const [user, setUser] = useState(getUser())
  const [openSignIn, setOpenSignIn] = useState(false)

  return (
    <main className="App">
      <Header user={user} setUser={setUser} openSignIn={openSignIn} setOpenSignIn={setOpenSignIn} />

      <Routes>
        <Route path="/resources" element={<Resources />} />
        <Route path="/community" element={<Community />} />
        <Route
          path="/editor"
          element={<Editor setUser={setUser} user={user} openSignIn={openSignIn} setOpenSignIn={setOpenSignIn} />}
        />
        <Route path="/team" element={<Team />} />
        <Route path="/*" element={<Navigate to="/editor" />} />
      </Routes>
    </main>
  )
}
