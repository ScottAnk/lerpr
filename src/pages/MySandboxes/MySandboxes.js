import React, { useState, useEffect } from 'react'
import * as sandboxServices from '../../utilities/sandboxes-services'
import Thumbnail from '../../components/Thumbnail/Thumbnail'
import './MySandboxes.css'

export default function MySandboxes({ setSandbox }) {
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
