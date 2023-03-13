import './Thumbnail.css'
import { Link } from 'react-router-dom'

export default function Thumbnail({ url }) {
  return (
    <>
      <Link to="#">
        <div className="thumbnail-card">
          <img src={url} className="thumbnail" alt="thumbnail"></img>
        </div>
      </Link>
    </>
  )
}
