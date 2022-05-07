import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import './Login.css'

function Login() {
  const history = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login",{
            email:e.target.email.value,
            password:e.target.password.value,
          }).then(()=>history('/user'))

  }
  return (
    <form action='/login' className='loginform' method='post' onSubmit={handleLogin}>
      <div className="form-content">
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputEmail4">Email</label>
            <input name='email' type="email" className="form-control" id="inputEmail4" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="inputPassword4">Password</label>
            <input name='password' type="password" className="form-control" id="inputPassword4" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
      </div>
      <button id='loginbtn1' type="submit" className="btn btn-primary mt-4">Login</button>
      <Link to='/signup' id='loginbtn2' type="submit" className="btn btn-primary">Register</Link>
    </form>
  )
}

export default Login