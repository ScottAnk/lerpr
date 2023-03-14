import NavBar from '../../components/NavBar/NavBar'
import './Header.css'
import { Modal } from 'react-responsive-modal'
import AuthPage from '../../pages/AuthPage/AuthPage'
import { logOut } from '../../utilities/users-service'
import lerpr from '../../assets/lerpr.png'
import { NavLink } from 'react-router-dom'

export default function Header({ user, setUser, openSignIn, setOpenSignIn, defaultSandbox, setSandbox, darkMode, setDarkMode }) {
  function handleSignIn() {
    console.log('Sign In')
    setOpenSignIn(true)
  }

  function handleSignOut() {
    console.log('Sign Out')
    setUser(null)
    logOut()
    setOpenSignIn(false)
  }

  return (
    <main className="Header">
      <div className="HeaderAuthContainer">
        <div className="CoinContainer">
        <h5>{darkMode ? 'Light Mode' : 'Dark Mode'}</h5>
        <input 
        type="checkbox" 
        className="DarkModeCheckbox" 
        name="DarkMode"
        value={darkMode ? `${'&#x25a2'}` : ''}
        checked={darkMode ? true : false}
        onChange={() => setDarkMode(!darkMode)}
        ></input>
        </div>
        <div className="TitleContainer">
          <img className="AppLogo" src={lerpr}></img>
          <h1 className="AppTitle">Lerpr</h1>
        </div>
        <div className="SignContainer">
          <div className="UserSign">
            {user ? (
              <>
                <p>
                  Hello,{' '}
                  <NavLink to='/mysandboxes'>
                    <span
                      style={{
                        textDecoration: 'underline',
                        fontWeight: 'bold',
                      }}
                    >
                      {user.name}
                    </span>
                  </NavLink>
                  &nbsp; | &nbsp;
                </p>
                <p className="link" onClick={handleSignOut}>
                  {' '}
                  Sign Out{' '}
                </p>
              </>
            ) : (
              <p className="link" onClick={handleSignIn}>
                Sign In
              </p>
            )}
          </div>
        </div>
      </div>
      <NavBar defaultSandbox={defaultSandbox} setSandbox={setSandbox} />
      <Modal
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
        center
      >
        <AuthPage setUser={setUser} setOpenSignIn={setOpenSignIn} />
      </Modal>
    </main>
  )
}
