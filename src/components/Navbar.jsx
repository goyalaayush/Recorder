import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
   <div className='form-container'>
    <nav >
      <Link to='/login' className='h'>Login</Link> <div></div>
      <Link to='/register' className='h'>Register</Link>
    </nav>
    </div>
  )
}

export default Navbar
