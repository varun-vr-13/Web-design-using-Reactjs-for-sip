import React from 'react';
import {Link} from 'react-router-dom'

let Nav=()=>{
  const navStyle={
    textDecoration:"none",
    color:"white",
  }
    return(
     

        <nav  className="sticky-top nav">  
        <Link style={navStyle} to="./" ><li>Home</li></Link>  
  <Link style={navStyle} to="./Details" ><li>Details</li></Link>   
    <Link style={navStyle} to="./Education"  ><li>Education</li></Link>
    <Link style={navStyle} to="./Certificates"  >  <li>Certificates</li></Link>
    <Link style={navStyle} to="./Skills" ><li>Skills</li></Link>  

  </nav>
  

  
    
  );
}
export default Nav