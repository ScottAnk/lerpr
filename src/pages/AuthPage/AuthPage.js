import { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({ setUser, setOpenSignIn, openSignIn }) {
  const [showSignUp, setShowSignUp] = useState(false)
  return (
    <main className="MainAuth">
      <h4>
        {showSignUp
          ? 'Sign Up for a Lerpr Account in order to Save your Sandbox:'
          : 'Login to your Lerpr Account to Save your Sandbox:'}
      </h4>

      {showSignUp ? (
        <SignUpForm setUser={setUser} setOpenSignIn={setOpenSignIn} />
      ) : (
        <LoginForm setUser={setUser} setOpenSignIn={setOpenSignIn} />
      )}
      <div className="AuthFooter">
        {showSignUp ? (
          <>
            <h5>Have a Lerpr Account Already?</h5>
            <h5
              className="AuthSpan"
              onClick={() => setShowSignUp(!showSignUp)}
            >
              <u>Login Here</u>
            </h5>
          </>
        ) : (
          <>
            <h5>Not a User Yet? Sign-Up for a Lerpr Account</h5>
            <h5
              className="AuthSpan"
              onClick={() => setShowSignUp(!showSignUp)}
            >
              <u>Here</u>
            </h5>
          </>
        )}
      </div>
    </main>
  )
}
