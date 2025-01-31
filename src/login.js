import React from "react";
import { useState } from "react";
function LogIn (props) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
  
    function handleName(event) {
      setName(event.target.value);
    }
    function handlePassword(event) {
        setPassword(event.target.value);
      }
  
    function handleClick(event) {
      setName(name);
      setPassword (password);
      props.a (name,password);
      //console.log (name, password);
      event.preventDefault();
    }

    return (  
        <div className="inputs"> 
         <label> Username : </label>
         <div className="input"> 
         <input type = "text" placeholder = "Enter Username" onChange = {handleName} />
         </div>
         <label> Password : </label>
         <div className="input">
            <input type = "password" placeholder = "Enter password" onChange = {handlePassword} />
         </div>
         <button type = "submit" onClick = {handleClick}>  Sign-In </button>
         <button> Don't have an account? Create one </button>
        </div>
        
    );
}
 
export default LogIn;