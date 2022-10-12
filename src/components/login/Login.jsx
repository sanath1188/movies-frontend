import React, { useState } from 'react'
import { setLocalAuthToken } from '../../utils/cookie';
import './Login.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
  }

  const loginHandler = async () => {
    /** API call */
    await fetch('https://sanath-movies-backend.herokuapp.com/user/login', {
      method: 'POST',
      // mode: "no-cors",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    }).then(response => response.json())
    .then(jsondata => setLocalAuthTokenAndRedirect(jsondata.data.token))
  }

  const setLocalAuthTokenAndRedirect = (token) => {
    setLocalAuthToken(token);
    window.location = '/movie';
  }

  const registerHandler = () => {
    window.location = '/register';
  }

  return (
    <div className='login'>
      <div className='login__fields'>
        <input type="text" placeholder='Enter email' value={email} onChange={emailChangeHandler} />
        <input type="password" placeholder='Enter password' value={password} onChange={passwordChangeHandler} />
        <div className='login__action'>
          <button onClick={loginHandler}>Login</button>
          <button onClick={registerHandler}>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Login