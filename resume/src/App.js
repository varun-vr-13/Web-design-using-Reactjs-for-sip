import React from 'react';
import './App.css';
import Details from './Details'
import Nav from './Nav'
import Education from './Education'
import Certificates from './Certificates'
import skills from './skills'
import pro1 from './profile.jpg'
import data from './Data.json'
import {createSvgIcon} from "react-social-login-buttons";
import { FacebookLoginButton } from "react-social-login-buttons";
import { InstagramLoginButton } from "react-social-login-buttons";
import { LinkedInLoginButton } from "react-social-login-buttons";
import { GithubLoginButton } from "react-social-login-buttons";
import { TwitterLoginButton } from "react-social-login-buttons";

import ExampleComponent from 'react-rounded-image'
import  {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom"
function App() {
  return (
     <Router>
    <div className="App">
    <Nav >
    </Nav>
  <Switch>
 
  <Route  path="/" exact component={Home}></Route>
      <Route path="/details" component={Details}></Route>
      <Route  path="/education" component={Education}></Route>
    <Route  path="/certificates" component={Certificates}></Route>
    <Route  path="/skills" component={skills}></Route>
  </Switch>

   
    </div>
      </Router>
  );
}
const Home=()=>(
  <div className="home">
  <div className="card">
 

 <p className="img1"> <ExampleComponent
   image={pro1}
   imageWidth="300"
   imageHeight="300"
   roundedSize="10"

  
  /> </p>
 <h3>{data.careerobjective} </h3>
  </div>
        <div className="down">
       <h2>Contact : </h2>
          <a title='mail' href='mailto:doddivarun13@gmail.com'>doddivarun13@gmail.com</a>
              <br />          <a title='number' href="tel:8900967898">+91 8900967898</a>
              <br />          <a title='number' href="tel:8901236789">+91 8901236789</a>
                 
                       
                       <h2>Connect:</h2>
             <div className='lin'>
                 <a target="_blank" href="https://www.facebook.com/">   <FacebookLoginButton className="fb" style={{width:"50px"}} >
                        <span></span>
               </FacebookLoginButton>  </a>
             <a target="_blank"  href="https://instagram.com/">    <InstagramLoginButton className="fb" style={{width:"50px"}} ><span></span></InstagramLoginButton></a>
             <a target="_blank"  href="https://github.com/"> <GithubLoginButton className="fb" style={{width:"50px"}}  ><span></span>  </GithubLoginButton></a>
            <a target="_blank"  href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fprofile%2Fview&trk=login_reg_redirect">  <LinkedInLoginButton className="fb" style={{width:"50px"}}  ><span></span> </LinkedInLoginButton ></a>
              <a target="_blank"  href=' https://twitter.com/'> <TwitterLoginButton className="fb" style={{width:"50px"}} ><span></span></TwitterLoginButton></a>

                    </div>

       </div>
    </div>
 

);
export default App;
