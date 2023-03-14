import '../../pages/AuthPage/AuthPage.css'

import { useState } from 'react'

import { signUp } from '../../utilities/users-service'

export default function SignUpForm({ setUser, setOpenSignIn }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')

  // format form data and send it to server to create a user
  async function handleSubmit(event) {
    event.preventDefault()
    try {
      console.log(formData)
      const signUpData = { ...formData }
      delete signUpData.confirmPassword
      console.log(signUpData)
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(signUpData)
      // Update user state with user
      setUser(user)
      setOpenSignIn(false)
    } catch {
      // Invalid signup
      setError('Sign Up Failed - Try Again')
    }
  }

  // save changes to state as they're made
  async function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const disabled = formData.password !== formData.confirmPassword

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="SignUpForm">
          <div className="SignUpColumns">
            <label>Username</label>
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={formData.name}
              onChange={handleChange}
              required
            />
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="SignUpColumns">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-Enter Password"
              value={formData.confirm}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          style={{
            color: formData.password == '' ? 'black' : disabled ? 'black' : '',
            backgroundColor: formData.password == '' ? 'grey' : disabled ? 'grey' : ''}}

          disabled={
            formData.password == '' ? 'disabled' : disabled ? 'disabled' : ''
          }
        >
          SIGN UP
        </button>
      </form>
      <p className="error-message">{error}</p>
    </div>
  )
}
