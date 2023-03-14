import { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({ setUser, setOpenSignIn, openSignIn }) {
  const [showSignUp, setShowSignUp] = useState(false)
  return (
    <main className="MainAuth">
      <h3>{showSignUp ? 'Sign Up for a Lerpr Account in order to Save your Sandbox:' : 'Login to your Lerpr Account to Save your Sandbox:'}</h3>

      {showSignUp ? (
        <SignUpForm setUser={setUser} setOpenSignIn={setOpenSignIn} />
      ) : (
        <LoginForm setUser={setUser} setOpenSignIn={setOpenSignIn} />
      )}
      <h3>
        {showSignUp
          ? `Have an Account Already? Login Below` : 'Not a User Yet? Sign-Up for a Lerpr Account:'
          }
      </h3>
      <button className="AuthButton" onClick={() => setShowSignUp(!showSignUp)}>
        {showSignUp ? 'Log In' : 'Sign Up'}
      </button>
    </main>
  )
}
