import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signUp } from '../../utilities/users-service'

export default function SignUpForm({ setUser, showSignUp, handleShowSignUp }) {
  const navigate = useNavigate()

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
      const signUpData = { ...formData }
      delete signUpData.confirmPassword
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData)
      // Update user state with user
      setUser(user)

      // send new users to the room creation screen
      navigate('/room/create')
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

  const disable = formData.password !== formData.confirmPassword
  return (
    <div>
      <div className="CardContainer">
        <h2 className="AuthHeader">
          <u>Let's Sign Ya Up!</u>
        </h2>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label>Confirm</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-Enter Password"
            value={formData.confirm}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={disable} className="AuthSubmit">
            SIGN UP
          </button>
        </form>
        <div className="BreakContainer">
          <div className="SectionBreak"></div>
        </div>
        <div className="LoginOrSignUp">
          <h4
            style={{
              marginTop: '-10px',
              marginBottom: '5px',
            }}
          >
            Already have an account?
          </h4>
          <button onClick={handleShowSignUp}>
            {showSignUp ? 'Login To Your Account' : 'Create New Account'}
          </button>
        </div>
      </div>
      <p className="error-message">{error}</p>
    </div>
  )
}
