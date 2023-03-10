import NavBar from '../../components/NavBar/NavBar'
import './Header.css'

export default function Header({ user }) {
  // function handleSignIn() {
  //   console.log('Sign In')
  // }

  // function handleSignOut() {
  //   console.log('Sign Out')
  // }

  return (
    <main className="Header">
      <div className="HeaderAuthContainer">
        {/* <h3>Lerpr Coin</h3> */}
        <h1>Lerpr</h1>
        {/* {user ? (
          <>
            <p>Hello, {user} |</p>
            <p onClick={handleSignOut}> Sign Out </p>
          </>
        ) : (
          <p onClick={handleSignIn}>Sign In</p>
        )} */}
      </div>
      <NavBar />
    </main>
  )
}
