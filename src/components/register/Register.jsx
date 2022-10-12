import React, { useState } from 'react'
import '../login/Login.css'
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value)
  }

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value)
  }

  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
  }

  const registerHandler = async () => {
    /** API call */
    await fetch('https://sanath-movies-backend.herokuapp.com/user/register', {
      method: 'POST',
      // mode: "no-cors",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password, firstName, lastName })
    }).then(response => response.json())
      .then(jsondata => loginHandler())
  }

  const loginHandler = () => {
    window.location = '/login';
  }

  return (
    <div className='login'>
      <div className='login__fields'>
        <input type="text" placeholder='Enter first name' value={firstName} onChange={firstNameChangeHandler} />
        <input type="text" placeholder='Enter last name' value={lastName} onChange={lastNameChangeHandler} />

        <input type="text" placeholder='Enter email' value={email} onChange={emailChangeHandler} />
        <input type="password" placeholder='Enter password' value={password} onChange={passwordChangeHandler} />
        <div className='login__action'>
          <button onClick={registerHandler}>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Register