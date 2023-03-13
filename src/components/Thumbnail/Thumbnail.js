import './Thumbnail.css'
import { Link, useLocation } from 'react-router-dom'

export default function Thumbnail({ sandbox }) {

  let location = useLocation()
  console.log(location.pathname)

  return (
    <>
      <Link to="#">
        <div className="thumbnail-card">
          <img src={sandbox.dataURL} className="thumbnail" alt="thumbnail"></img>
          <h3><strong>{sandbox.name}</strong></h3>
          {location.pathname === '/mysandboxes' ? null : <h5>By {sandbox.owner.name}</h5>}
        </div>
      </Link>
    </>
  )
}
