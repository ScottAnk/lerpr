import { Navigate, NavLink, useLocation } from 'react-router-dom'

export default function NavBar({ user }) {
  let location = useLocation()

  return (
    <div className="NavBarContainer">
      <NavLink to="/editor" onClick={<Navigate to="/editor" />}>
        Editor
      </NavLink>
      <NavLink to="/resources" onClick={<Navigate to="/resources" />}>
        Resources
      </NavLink>
      <NavLink to="/community" onClick={<Navigate to="/community" />}>
        Community
      </NavLink>
    </div>
  )
}
