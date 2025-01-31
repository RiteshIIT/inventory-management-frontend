import './App.css';
import LogIn from './login';
import React from 'react';

function App() {
  var username, password;
  function Login (name,pwd) { 
    username = name;
    password = pwd;
    console.log (username,password);
  }
  return (
    <div> 
      <LogIn a = {Login}/>
    </div>
  );
}

export default App;
