import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  const navs = [
    {
      'id':1,
      'title':'Home',
      'link':'#intro'
    },
    {
      'id':2,
      'title':'About',
      'link':'#skills'
    },
    {
      'id':3,
      'title':'Portfolio',
      'link':'#portfolio'
    },
    {
      'id':4,
      'title':'Clients',
      'link':'#clients'
    },
  ]

  const navItems = navs.map(nav =>{
    return(
      <Link to={nav.link} key={nav.id} className='desktopItems'>{nav.title}</Link>
    )
  })

  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo" />

      <div className="desktopMenu">
        {navItems}
      </div>

      <button className="desktopBtn">
        <img src="" alt="" />
        Contact Me!
      </button>
    </nav>
  )
}

export default Navbar