import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { MdPerson, MdEmail, MdPhone, MdLock, MdVisibility, MdVisibilityOff } from 'react-icons/md' // Importing icons

const SignUp = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)  // State to toggle password visibility
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")

  // A function to send data to the database
  const submit = async (e) => {
    e.preventDefault()
    setLoading("Please wait as we upload your data")

    try {
      const data = new FormData()

      data.append("username", username)
      data.append("email", email)
      data.append("phone", phone)
      data.append("password", password)

      const response = await axios.post("https://peter68.pythonanywhere.com/api/signup", data)

      setLoading("")
      setSuccess(response.data.Success)

    } catch (error) {
      setLoading("")
      setError(error.message)
    }
  }

  return (
    <div className='row justify-content-center mt-4'>
      <div className='col-md-6 p-4 card shadow'>
        <h2>Sign Up</h2>

        <form onSubmit={submit}>

          <p className='text-warning'>{loading}</p>
          <p className='text-danger'>{error}</p>
          <p className='text-success'>{success}</p>

          {/* Username input with icon */}
          <div className="input-group mb-3">
            <span className="input-group-text"><MdPerson /></span>
            <input
              type="text"
              placeholder="Enter username"
              className="form-control"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Email input with icon */}
          <div className="input-group mb-3">
            <span className="input-group-text"><MdEmail /></span>
            <input
              type="email"
              placeholder="Enter email"
              className="form-control"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Phone input with icon */}
          <div className="input-group mb-3">
            <span className="input-group-text"><MdPhone /></span>
            <input
              type="tel"
              placeholder="Enter phone"
              className="form-control"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Password input with icon and show/hide functionality */}
          <div className="input-group mb-3">
            <span className="input-group-text"><MdLock /></span>
            <input
              type={showPassword ? "text" : "password"}  // Toggle password visibility
              placeholder="Enter password"
              className="form-control"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="input-group-text"
              onClick={() => setShowPassword(!showPassword)}  // Toggle showPassword state
              style={{ cursor: 'pointer' }}
            >
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />} {/* Show/hide password icon */}
            </span>
          </div>

          <button className="btn btn-primary" type="submit">Sign Up</button>
        </form>

        <br />
        Already have an account? <Link to="/signin">Sign In</Link>
      </div>
    </div>
  )
}

export default SignUp
