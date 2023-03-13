import './Thumbnail.css'
import { Link, useLocation } from 'react-router-dom'

export default function Thumbnail({ sandboxInstance, setSandbox }) {

  let location = useLocation()

  function handleLink() {
    setSandbox(sandboxInstance)
  }

  return (
    <>
      <Link to="/editor" onClick={() => handleLink()}>
        <div className="thumbnail-card">
          <img
            src={sandboxInstance.dataURL}
            className="thumbnail"
            alt="thumbnail"
          ></img>
          <h3>
            <strong>{sandboxInstance.name}</strong>
          </h3>
          {location.pathname === '/mysandboxes' ? null : (
            <h5>By {sandboxInstance.owner.name}</h5>
          )}
        </div>
      </Link>
    </>
  )
}
