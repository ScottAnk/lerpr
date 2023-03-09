import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { getUser } from '../../utilities/users-service'
import './App.css'

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      <h1>hello world</h1>
    </main>
  )
}
