import React from 'react'
import { deleteCookie } from '../../utils/cookie'
import './User.css'
const User = ({firstName, lastName}) => {
  const logout = () => {
    deleteCookie('auth_token');
    window.location = '/login';
  }

  return (
    <div className='user-bar'>
      <div>Hello, {firstName} {lastName}!</div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default User