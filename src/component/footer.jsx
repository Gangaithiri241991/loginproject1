import React from "react"
import Button from '@mui/material/Button';
import img from './3670151.png'
import img1 from './f.jpg'
import img2 from './flo.png'
export default function Navbar(){
    return(
        <div className="footer">
            
           <div className="footericon">
           
            
                
                <li> <img src={img2} height="40px" width="40px"/></li>
                
                <li> <img src={img} height="40px" width="40px"/></li>
                <li>
                <img src={img1} height="40px" width="40px"/>
                </li>
          
           </div>

          <div className="footerdes">
            <h6>info.Support.Marketing</h6>
            
            <h6>Term of use.Privacy Policy</h6>
            <p>2018 Clarity Money</p>
            </div>
        </div>
    )
}