import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import './login.css';
import left from './images/login-left.png';
import right from './images/login-right.png';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
function LogIn (props) {
  //console.log ("Login routing has been done");
    const [username, setName] = useState("Username");
    const [password, setPassword] = useState("Password");
  
    function handleName(event) {
      setName(event.target.value);
    }
    function handlePassword(event) {
        setPassword(event.target.value);
      }
      const history=useHistory();
    /*function handleClick(event) {
      setName(name);
      setPassword (password);
      props.a (name,password);
      console.log (name, password);
      event.preventDefault();
    }
      */
     async function handleClick (event) {
       setName(username);
       setPassword(password);
       // console.log(name, password);
       try {
         const response = await axios.post('http://127.0.0.1:8000/login/', {
           username,
           password,
          });
          let tok=`Token ${response.data.token}`
          console.log(tok);
        if (response.data.token) {
          localStorage.setItem('auth_token', response.data.token);

          // Set token in axios default headers
          axios.defaults.headers.common['Authorization'] = tok;

          alert("Login Successful! Redirecting to home...");
          history.push('/home');  // Redirect after login
      }
        // alert("Login Successful! Redirecting to login...");
        // history.push('/home');
    }
    catch (error) {
      console.log(error);
        console.error("Login error:", error.response?.data);
        alert("Login failed: " + JSON.stringify(error.response?.data));
    }
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
         <div className="input"> 
         <input type = "text" placeholder = "Enter Username" onChange = {handleName} />
         </div>
         <div className="input">
            <input type = "password" placeholder = "Enter password" onChange = {handlePassword} />
         </div>
         <div className="sign-in button"> 
         {/* <Link to = "/home"> */}
         <button type = "submit" onClick = {handleClick}>  Sign-In </button>
         {/* </Link> */}
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
