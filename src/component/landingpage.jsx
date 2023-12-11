import React from "react"
import Button from '@mui/material/Button';
import CardNew from "./cardnew";
import Login1 from './login1'
import Footer from './footer'
export default function LandingPage(){



    return(
      <div className="home">
       Home
<p className="welcome">      Welcome</p>
<h1 className="descriptioncard">
    Selling on the internet like a pro
</h1>
<h6 className="descriptioncard">
    We know how large object Will act, but things on a small scale just do not act that way
</h6><br/>

<div className="buttlogin">
<Button variant="contained">GetQuotes</Button>
<Button>Learnmore</Button>

</div>


      <div className="cardinform">
         <CardNew  title="training Course"  
         list="The gradual Accumalation of information about atomic and small -scale behaviour" 
         />
           <CardNew  title="2999 courses" list="The gradual Accumalation of information about atomic and small -scale behaviour" 
         />
          <CardNew  title="training Course" list1="The gradual Accumalation of information about atomic and small -scale behaviour" 
         />
         </div>
    
         <div className="footerhome">  <Footer/></div>
       
     </div>
       
    )
}