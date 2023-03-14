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
    <>
      <div className="line"></div>
      <div className="CardContainer">
        <h2 className="AuthHeader"></h2>
        <form className="SignUpForm" autoComplete="off" onSubmit={handleSubmit}>
          <div className="LabelInput">
            <label>Username</label>
            <input
              className="AuthInput"
              type="text"
              name="name"
              placeholder="Username"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="LabelInput">
            <label>Email</label>
            <input
              className="AuthInput"
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="LabelInput">
            <label>Password</label>
            <input
              className="AuthInput"
              type="password"
              name="password"
              placeholder="Your Password"

              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="LabelInput extra">
            <label>Confirm Password</label>
            <input
              className="AuthInput"
              type="password"
              name="confirmPassword"
              placeholder="Re-Enter Password"
              value={formData.confirm}
              onChange={handleChange}
              required
            />
          </div>

          <div className="ButtonContainer">
            <button
              type="submit"
              className="AuthButton SignUpButton"
              style={{
                color: formData.password == '' ? 'black' : disabled ? 'black' : '',
                backgroundColor: formData.password == '' ? 'grey' : disabled ? 'grey' : ''}}
      
              disabled={
                formData.password == '' ? 'disabled' : disabled ? 'disabled' : ''
              }
            >
              SIGN UP
            </button>
          </div>
        </form>
      <p className="error-message">{error}</p>
      </div>
    </>
  )
}