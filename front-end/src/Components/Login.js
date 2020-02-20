import React, { useState } from "react";
import "./styles/Login.css";
import axios from 'axios';

function Login() {
  const [user, setUser] = useState({
    Username: "",
    password: ""
  });

  const changeHandler = event => {
      setUser({
          ...user, 
          [event.target.name]: event.target.value
      });
  };


  const submitHandler = event => {
      event.preventDefault();
      console.log(user);
  }

  axios
        .post('http://replate-eu.herokuapp.com/api/auth/login')
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err)
        })
  return (
    <div>
      <form className="loginForm" onSubmit={event => submitHandler(event)}>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Username"
          name="Username"
          onChange={event => changeHandler(event)}
        />
        <label>Password</label>
        <input
          type="text"
          placeholder="password"
          name="password"
          onChange={event => changeHandler(event)}
        />
        <button>Login</button>
      </form>
    </div>
  );
}


export default Login;