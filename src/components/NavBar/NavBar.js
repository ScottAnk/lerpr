import { Navigate, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Modal } from 'react-responsive-modal'
import './NavBar.css'

export default function NavBar({ user, defaultSandbox, setSandbox }) {
  const [openNewSandbox, setOpenNewSandbox] = useState(false)
  let location = useLocation()

  function handleNavigateEditor() {
    setOpenNewSandbox(false)
    setSandbox(defaultSandbox)
  }

  return (
    <div className="NavBarContainer">
      <NavLink
        className={({ isActive }) =>
          isActive ? 'nav-active nav-link' : 'nav-link'
        }
        to="/editor"
        onClick={() => location.pathname == '/editor' && setOpenNewSandbox(true)}
      >
        <span >
          {location.pathname == '/editor' ? 'New Sandbox' : 'Editor'}
        </span>
      </NavLink>
      <Modal
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}
        open={openNewSandbox}
        onClose={() => setOpenNewSandbox(false)}
        center
      >
        <h2>Are you sure you want to create a new Sandbox?</h2>
        <h4>
          you will lose any unsaved progress and be directed a new Sandbox
          workspace
        </h4>
        <button onClick={() => setOpenNewSandbox(false)}>No</button>
        <button onClick={handleNavigateEditor}>Yes</button>
      </Modal>
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
