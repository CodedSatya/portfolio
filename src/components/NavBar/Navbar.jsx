import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo" />

      <div className="desktopMenu">
        <Link className='desktopItems'>Home</Link>
        <Link className='desktopItems'>About</Link>
        <Link className='desktopItems'>Portfolio</Link>
        <Link className='desktopItems'>Clients</Link>
      </div>

      <button className="desktopBtn">
        <img src="" alt="" />
        Contact Me!
      </button>
    </nav>
  )
}

export default Navbar