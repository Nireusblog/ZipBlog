import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


export const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    password:"",
    email:"", 
  })

  const [err,setError] = useState(null);

  const navigate = useNavigate();
  
  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

 const handleSubmit = async e =>{
  e.preventDefault();
  try {
    await axios.post("/auth/register", inputs);
    navigate("/login"); 
  } catch (err) {
    setError(err.response.data);
  }
     
 }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username' name='username' onChange={handleChange} />
        <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
        <input required type="email" placeholder='email' name='email' onChange={handleChange}/>
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>Do you have an account? <Link to = "/login">Login</Link>

        </span>
      </form> 
      </div>
  )
}
