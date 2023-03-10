import NavBar from '../../components/NavBar/NavBar'
import './Header.css'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import AuthPage from '../../pages/AuthPage/AuthPage'
import { logOut } from '../../utilities/users-service'

export default function Header({ user, setUser, openSignIn, setOpenSignIn }) {
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
        <h3>Lerp Coin</h3>
        <h1 className='AppTitle'>Lerpr</h1>
        <div className='UserSign'>
          {user ? (
            <>
              <p>Hello, {user.name} |</p>
              <p onClick={handleSignOut}> Sign Out </p>
            </>
          ) : (
            <p onClick={handleSignIn}>Sign In</p>
          )}
        </div>
      </div>
      <NavBar />
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
