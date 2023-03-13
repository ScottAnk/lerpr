import { Navigate, NavLink, useLocation } from 'react-router-dom'
import './NavBar.css'

export default function NavBar({ user }) {
  let location = useLocation()

  return (
    <div className="NavBarContainer">
      <NavLink
        className={({ isActive }) =>
          isActive ? 'nav-active nav-link' : 'nav-link'
        }
        to="/editor"
        onClick={<Navigate to="/editor" />}
      >
        Editor
      </NavLink>
      &nbsp; | &nbsp;
      <NavLink
        className={({ isActive }) =>
          isActive ? 'nav-active nav-link' : 'nav-link'
        }
        to="/mysandboxes"
        onClick={<Navigate to="/mysandboxes" />}
      >
        My Sandboxes
      </NavLink>
      &nbsp; | &nbsp;
      <NavLink
        className={({ isActive }) =>
          isActive ? 'nav-active nav-link' : 'nav-link'
        }
        to="/resources"
        onClick={<Navigate to="/resources" />}
      >
        Resources
      </NavLink>
      &nbsp; | &nbsp;
      <NavLink
        className={({ isActive }) =>
          isActive ? 'nav-active nav-link' : 'nav-link'
        }
        to="/community"
        onClick={<Navigate to="/community" />}
      >
        Community
      </NavLink>
    </div>
  )
}
