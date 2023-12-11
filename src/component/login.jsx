import React,{useState} from "react"
import Button from '@mui/material/Button';
import {NavLink,useNavigate}from 'react-router-dom'
import Navbar from "./navbar";
export default function Login(){
    const navigate = useNavigate()
    function handleLogout(){
        localStorage.removeItem("token")
        navigate("/login")
    }
    
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
 navigate("/land")
  }
    return(
        <div className="login1">
      
        <div className="login"> 
            UserName:<input   placeholder='Enter Email'
         type="email"
         value= {email}
         onChange={(e)=>setEmail(e.target.value)}/>
            Password:<input placeholder='Enter Password'
         type="Password"
         value ={password}
         onChange={(e)=>setPassword(e.target.value)}/>
            <div className="buttlogin">
            <Button type="submit"
      
      onClick={handleLogin}>
             Login
            </Button>
           
            </div>
           <p>
            New user can Sign in here <NavLink to="/signup">Signup</NavLink>
           </p>
            
        </div>
        </div>
    )
}