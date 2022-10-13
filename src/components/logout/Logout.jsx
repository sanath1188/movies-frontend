import React from 'react'
import { deleteCookie } from '../../utils/cookie';

const Logout = () => {
  deleteCookie('auth_token');
  return (
    <div>You've been logged out of the application!</div>
  )
}

export default Logout