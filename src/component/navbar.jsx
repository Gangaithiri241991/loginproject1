import React from "react"
import Button from '@mui/material/Button';
import {NavLink,useNavigate} from 'react-router-dom'
export default function Navbar(){

    const navigate = useNavigate()
    function handleLogout(){
        localStorage.removeItem("token")
        navigate("/login")
    }
    return(
        
            
        <div className="navbar">
       < p className="logo">BrandName</p>
        <NavLink to="/"><li><Button >Home</Button></li></NavLink>
       
       <NavLink to="/product"><li><Button >Product</Button></li></NavLink>
       <NavLink to="/pricing"><li><Button  >Pricing</Button></li></NavLink>
       <NavLink to="/contact"><li><Button>Contact</Button></li></NavLink>
       <div className="navlogin">
       <NavLink to="/login"><li><Button >Login</Button></li></NavLink>
       <NavLink to="/joinus"><li><Button  variant='contained'>JOinUs</Button></li></NavLink>
       <NavLink to="/login"><Button  variant='contained' onClick={handleLogout}>LogOut</Button></NavLink>
       </div>
        </div>
        
    )
}