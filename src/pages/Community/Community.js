import React, { useState, useEffect } from 'react'
import * as sandboxServices from '../../utilities/sandboxes-services'
import Thumbnail from '../../components/Thumbnail/Thumbnail'

export default function Community() {
  const [user, setUser] = useState()
  const [sandboxes, setSandboxes] = useState([])

  const singleThumbnail = sandboxes.map((sandbox, index) => {
      return <Thumbnail sandbox={sandbox} key={index} />
    })

  async function index() {
    const sandboxes = await sandboxServices.indexAllSandboxes()
    console.log(sandboxes)
    return sandboxes
  }

  useEffect(() => {
    async function generateThumbnails() {
      const fetchedThumbnails = await index()
      setSandboxes(fetchedThumbnails)
      console.log(fetchedThumbnails)
    }
    generateThumbnails()
    console.log(sandboxes)
  }, [])
  // useEffect(() => {
  //   index()
  //     .then((sandboxes) => setThumbnails(sandboxes))
  //     .then(console.log(thumbnails))
  // }, [])

  // return <div>{singleThumbnail}</div>
}
