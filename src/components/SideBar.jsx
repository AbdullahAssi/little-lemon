import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/little lemon logos/logo.png'
import cross from '../assets/icons_assets/close-line-icon.svg'
import Menu from '../assets/icons_assets/menu.svg'
import logo2 from '../assets/little lemon logos/logo2.png'

const navLinks = [
  {
    name: 'Home',
    id: 1,
    link: '/'
  },
  {
    name: 'About',
    id: 2,
    link: '/about'
  },
  {
    name: 'Reservations',
    id: 3,
    link: '/reservations'
  },
  {
    name: 'Menu',
    id: 4,
    link: '/menu'
  },
  {
    name: 'Login',
    id: 5,
    link: '/login'
  }
]



const SideBar = () => {

  const [showMenu, setShowMenu] = useState(false)
  console.log(showMenu);



  if (showMenu) {
    return (
      <aside className='sidebar' >
        <div className="logo">
          <img src={logo} className='logo' alt="Little Lemon" />
        </div>
        <div className="cross" onClick={() => setShowMenu(false)} >
          <img src={cross} alt="" className='icon' />
        </div>
        <nav className="navlinks">
          {navLinks.map((navLink) => {
            const { name, id, link } = navLink
            return <div key={id} className='navlink'>
              <NavLink to={link} className='link'> {name} </NavLink>
            </div>
          })}
        </nav>
        <div className="navfooter">
          <img src={logo2} alt="" className='logo' />
          <p className='margin-top'>Established 2015</p>
        </div>
      </aside>
    )
  }
  if (!showMenu) {
    return (
      <div className="hamburger" onClick={() => setShowMenu(true)}>
        <img src={Menu} alt="Menu" />
      </div>
    )
  }




}

export default SideBar