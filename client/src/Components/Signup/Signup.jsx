import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const history = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [place, setPlace] = useState('')


    const handleSignup = (e) => {
        e.preventDefault()
        console.log(e.target.name.value);
        axios.post("http://localhost:5000/api/signup",{
            name:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value,
            place:e.target.place.value,
          }).then((res)=>history('/login'))
    
    }
    return (
        <form action='/signup' className='form' method='post' onSubmit={handleSignup}>
            <div className="form-content">
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputname4">Name</label>
                        <input name='name' type="text" className="form-control" id="inputname4" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputEmail4">Email</label>
                        <input name='email' type="email" className="form-control" id="inputEmail4" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputPassword4">Password</label>
                        <input name='password' type="password" className="form-control" id="inputPassword4" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputplace4">Place</label>
                        <input name='place' type="text" className="form-control" id="inputplace4" placeholder="Place" value={place} onChange={(e)=>setPlace(e.target.value)}  />
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-4">Sign Up</button>
        </form>
    )
}

export default Signup