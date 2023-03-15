import React, { useState, useEffect } from 'react'
import * as sandboxServices from '../../utilities/sandboxes-services'
import Thumbnail from '../../components/Thumbnail/Thumbnail'
import './Community.css'

export default function Community({ setSandbox }) {
  const [sandboxes, setSandboxes] = useState([])

  async function index() {
    const sandboxes = await sandboxServices.indexAllSandboxes()
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
    <div className="CommunityPage">
      <h1 style={{marginBottom: '0.5em'}}>Community Sandboxes</h1>
      <p>Feel free to browse the community page to see how other Lerpr users are building out their bézier curves,</p>
        <p>you even have the option of creating your own copy of their sandbox!</p>
        <p><b>(click on a sandbox to view full-screen / make a copy)</b></p> 
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
