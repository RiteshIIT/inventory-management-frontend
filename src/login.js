import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import './login.css';
import left from './images/login-left.png';
import right from './images/login-right.png';
function LogIn (props) {
  //console.log ("Login routing has been done");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
  
    function handleName(event) {
      setName(event.target.value);
    }
    function handlePassword(event) {
        setPassword(event.target.value);
      }
  
    /*function handleClick(event) {
      setName(name);
      setPassword (password);
      props.a (name,password);
      console.log (name, password);
      event.preventDefault();
    }
      */
     function handleClick (event) {
      setName(name);
      setPassword(password);
      console.log(name, password);
     }

    return (  
        <div className="login page"> 
        <div className="navbar"> 
          <div className="title">
          <h2> Inventory Manager </h2>
          </div>
        </div>

        <div className="left-image">
          <img src = {left} alt = "login-left.png"/>
        </div>
        <div className="right-image">
          <img src = {right} alt = "login-right.png" />
        </div>
      
        <div className="text">
         <label> Username : </label>
         <div className="input"> 
         <input type = "text" placeholder = "Enter Username" onChange = {handleName} />
         </div>
         <label> Password : </label>
         <div className="input">
            <input type = "password" placeholder = "Enter password" onChange = {handlePassword} />
         </div>
         <div className="sign-in button"> 
         <Link to = "/home">
         <button type = "submit" onClick = {handleClick}>  Sign-In </button>
         </Link>
         </div>
         <div className="smaller-buttons">
         <Link to = "/sign-up"> 
         <button> Don't have an account? Create one </button> <br></br>
         </Link>
         </div>
         <div className="smaller-buttons">
         <button> Forgot Password</button>
         </div>
         </div>
        </div>
        
    );
}
 
export default LogIn;
