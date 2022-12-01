import React, { useRef, useEffect } from 'react'
import { useContextAPI } from './context'

const Submenu = () => {
  const { isSubmenuOpen, location, subMenuData } = useContextAPI()
  const container = useRef(null)
  console.log(subMenuData)

  useEffect(() => {
    const subMenu = container.current
    const { center, botton } = location

    subMenu.style.left = `${center}px`
    subMenu.style.top = `${botton}px`
  }, [location])

  return (
    <aside className={`submenu ${isSubmenuOpen && 'show'} `} ref={container}>
      <section>
        <h4>{subMenuData.page}</h4>
        <div className={`submenu-center col-${subMenuData.links.length}`}>
          {subMenuData.links.map((link, index) => {
            const { label, url, icon } = link
            return (
              <a key={index} href={url}>
                {icon} {label}
              </a>
            )
          })}
        </div>
      </section>
    </aside>
  )
}

export default Submenu
