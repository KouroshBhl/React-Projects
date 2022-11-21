import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useContextAPI } from './context'

const Navbar = () => {
  const { setIsSidebarOpen, openSubmenu, setIsSubmenuOpen } = useContextAPI()

  const displaySubmenu = function (e) {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
    openSubmenu(page, { center, bottom })
  }

  const handleCloseSubmenu = function (e) {
    if (!e.target.classList.contains('link-btn')) setIsSubmenuOpen(false)
  }

  return (
    <nav className='nav' onMouseOver={handleCloseSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' className='nav-logo' />
          <button
            className='btn toggle-btn'
            onClick={() => setIsSidebarOpen(true)}
          >
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={(e) => displaySubmenu(e)}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={(e) => displaySubmenu(e)}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={(e) => displaySubmenu(e)}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign In</button>
      </div>
    </nav>
  )
}

export default Navbar
