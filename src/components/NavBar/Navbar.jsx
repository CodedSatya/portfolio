import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png'
import {Link} from 'react-scroll';

const Navbar = () => {
  const navs = [
    {
      'id':1,
      'title':'Home',
      'link':'intro'
    },
    {
      'id':2,
      'title':'About',
      'link':'skills'
    },
    {
      'id':3,
      'title':'Portfolio',
      'link':'works'
    },
    {
      'id':4,
      'title':'Connect',
      'link':'contactPage'
    },
  ]


  const [showMenu, setShowMenu] = useState(false);

  const navItems = navs.map(nav =>{
    return(
      <Link activeClass='active' to={nav.link} spy={true} smooth={true} offset={-80} duration={500} key={nav.id} className='desktopItems'>{nav.title}</Link>
    )
  })

  const MobnavItems = <>
    <img src={menu} className='menuIcon' alt="menu" onClick={()=>setShowMenu(!showMenu)}/>
    <div className="navMenu" style={{display: showMenu?'flex':'none'}}>
      {
        navs.map(nav =>{
          return(  
              <Link activeClass='active' to={nav.link} spy={true} smooth={true} offset={-80} duration={500} key={nav.id} className='listItems' onClick={()=>setShowMenu(false)}>{nav.title}</Link>
          )
        })
      }
    </div>
    </>

  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo" />
      

      <div className="desktopMenu">
        {navItems}
      </div>
      <button className="desktopBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'}, 500);
      }}>
        <img src="" alt="" />
        Contact Me!
      </button>

        {MobnavItems}
      
    </nav>
  )
}

export default Navbar