import { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({ setUser, setOpenSignIn }) {
  const [showSignUp, setShowSignUp] = useState(false)
  return (
    <main>
      <h3>Not a user yet? Please sign up or sign in to save your Sandbox</h3>
      <button onClick={() => setShowSignUp(!showSignUp)}>
        {showSignUp ? 'Log In' : 'Sign Up'}
      </button>
      {showSignUp ? (
        <SignUpForm setUser={setUser} setOpenSignIn={setOpenSignIn} />
      ) : (
        <LoginForm setUser={setUser} setOpenSignIn={setOpenSignIn} />
      )}
    </main>
  )
}
