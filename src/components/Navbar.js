import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        // className={({ isActive }) => (isActive ? 'active-custom link' : 'link')}
      >
        Home
      </NavLink>
      <NavLink to='/About'>About</NavLink>
      <NavLink to='/Products'>Products</NavLink>
    </nav>
  )
}

export default Navbar
