import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useContextAPI } from './context'

const Sidebar = () => {
  const { setIsSidebarOpen, isSidebarOpen } = useContextAPI()
  return (
    <div className={`sidebar-wrapper ${isSidebarOpen && 'show'}`}>
      <aside className='sidebar'>
        <button className='close-btn' onClick={() => setIsSidebarOpen(false)}>
          <FaTimes />
        </button>

        <div className='sidebar-links'>
          {sublinks.map((title, index) => {
            const { page, links } = title
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((sub, index) => {
                    const { label, icon, url } = sub
                    return (
                      <a href={url} key={index}>
                        {icon} {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
