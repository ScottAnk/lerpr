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
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="SignInForm">
          <div className="SignInColumns">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="SignInColumns">
          <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit"
        style={{
            color: credentials.password.length < 3 ? 'black' : '',
            backgroundColor: credentials.password.length < 3 ? 'grey' : ''}}
            disabled={credentials.password.length < 3 ? 'disabled' : ''}>LOG IN</button>
      </form>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  )
}
