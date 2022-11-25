import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='logo' className='logo' />
        </Link>

        <ul className='nav-links'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <NavLink to='/about'>About</NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar