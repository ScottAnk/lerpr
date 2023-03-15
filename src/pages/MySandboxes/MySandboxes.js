import React, { useState, useEffect } from 'react'
import * as sandboxServices from '../../utilities/sandboxes-services'
import Thumbnail from '../../components/Thumbnail/Thumbnail'
import './MySandboxes.css'

export default function MySandboxes({ setSandbox, user }) {
  const [sandboxes, setSandboxes] = useState([])

  async function index() {
    const sandboxes = await sandboxServices.indexMySandboxes()
    return sandboxes
  }

  async function generateThumbnails() {
    const fetchedURLs = await index()
    setSandboxes(fetchedURLs)
    return fetchedURLs
  }

  useEffect(() => {
    generateThumbnails()
  }, [])

  return (
    <div className="MySandboxes">
      <h1>My Sandboxes</h1>
      {
        user === null ? (
          <h2 style={{marginTop: '3em'}}>Sign-in to your account to view your Sandbox collection.</h2>) : sandboxes.length === 0 ? (
            <div>
            <h2 style={{marginTop: '3em'}}>Phew! It really is a desert here.</h2>
            <h2>*Tumbleweed rolls*</h2>
            <h2 style={{marginTop: '1em'}}>Currently, there are no sandboxes in your collection.</h2>
            <h2>As you create & save sandboxes, they'll show up on this page!</h2>
            </div>
            ) : ''
      }
      <div className="thumbnail-container">
        {sandboxes.map((sandboxInstance, index) => (
          <Thumbnail
            setSandbox={setSandbox}
            sandboxInstance={sandboxInstance}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}
