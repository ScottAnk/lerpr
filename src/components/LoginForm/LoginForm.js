import { useState } from 'react'
import * as usersService from '../../utilities/users-service'

export default function LoginForm({ setUser, setOpenSignIn }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
    setError('')
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault()
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials)
      setUser(user)
      setOpenSignIn(false)
    } catch {
      setError('Log In Failed - Try Again')
    }
  }

  return (
    <>
      <div className="line"></div>
      <div className="form-container">
        <form className="SignInForm" autoComplete="off" onSubmit={handleSubmit}>
            <div className="AuthFormRow">
            <label className="AuthLabel">Email</label>
            <input
              className="AuthInput"
              type="text"
              name="email"
              placeholder="Email Address"
              value={credentials.email}
              onChange={handleChange}
              required
            />
            </div>
            <div className="AuthFormRow">
              <label className="AuthLabel">Password</label>
              <input
                className="AuthInput"
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
          <button
            style={{
              color: credentials.password.length < 3 ? 'black' : '',
              backgroundColor: credentials.password.length < 3 ? 'grey' : '',
              fontSize: '18px',
            }}
            disabled={credentials.password.length < 3 ? 'disabled' : ''}
            className="AuthButton"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </>
  )
}
