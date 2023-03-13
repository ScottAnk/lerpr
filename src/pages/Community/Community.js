import React, { useState, useEffect } from 'react'
import * as sandboxServices from '../../utilities/sandboxes-services'
import Thumbnail from '../../components/Thumbnail/Thumbnail'
import './Community.css'

export default function Community() {
  // const [user, setUser] = useState()
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
    <div className="thumbnail-container">
      {sandboxes.map((sandbox, index) => (
        <Thumbnail sandbox={sandbox} key={index} />
      ))}
    </div>
  )
}
