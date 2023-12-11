import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import img from './edtech-slider.png'
import Signup from './signup'
//import Base from '../Base/Base.js'
//import Students from './Students.js'
import Navbar from './navbar'
function Login1() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   
    const handleLogin = async()=>{
        const userInfo = {
            email,
            password,
        }
const res = await fetch(`https://login1-vrwc.onrender.com/users/login`, {
    method :"POST",
    body : JSON.stringify(userInfo),
    headers:{
        "Content-Type":"application/json"
    }
});

   const data = await res.json();
  localStorage.setItem("token", data.data.token)
   navigate("/home")
    }
  return (
<div className='log'>
  <Navbar/>
        <TextField  label="email" variant="outlined" fullWidth sx={{ m: 1 }} 
         placeholder='Enter Email'
         type="email"
         value= {email}
         onChange={(e)=>setEmail(e.target.value)}
         />
        <TextField  label="password" variant="outlined" fullWidth sx={{ m: 1 }} 
         placeholder='Enter Password'
         type="Password"
         value ={password}
         onChange={(e)=>setPassword(e.target.value)}
         />
        <Button className='but'
        type="submit"
      
        onClick={handleLogin}
        >Login</Button>
       
       
   
</div>
  )
}

export default Login1