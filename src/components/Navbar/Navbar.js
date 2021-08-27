import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import DropdownJoin from './DropdownJoin';
import DropdownEvent from './DropdownEvent';
import logo from '../assets/img/LOGO.png';

function Navbar() {
  const [click, setClick] = useState(false);
  
  const [dropdown, setDropdown] = useState(false);
  const [dropdownEvent, setDropdownEvent] = useState(false);
  const [dropdownJoin, setDropdownJoin] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseEnterJoin = () => {
    if (window.innerWidth < 960) {
      setDropdownJoin(false);
    } else {
      setDropdownJoin(true);
    }
  };
  
  const onMouseEnterEvent = () => {
    if (window.innerWidth < 960) {
      setDropdownEvent(false);
    } else {
      setDropdownEvent(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseLeaveJoin = () => {
    if (window.innerWidth < 960) {
      setDropdownJoin(false);
    } else {
      setDropdownJoin(false);
    }
  };

  const onMouseLeaveEvent = () => {
    if (window.innerWidth < 960) {
      setDropdownEvent(false);
    } else {
      setDropdownEvent(false);
    }
  };

  return (
    <>
      <nav className='navbar fixed-top'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img className="visible-lg" src={logo} alt="upward" style={{height: "160px", width: "150px"}} />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnterEvent}
            onMouseLeave={onMouseLeaveEvent}>
            <Link
              to='/events'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Events <i className='fas fa-caret-down' />
            </Link>
            {dropdownEvent && <DropdownEvent/>}
          </li>
          
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnterJoin}
            onMouseLeave={onMouseLeaveJoin}
          >
            <Link
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Get Involved <i className='fas fa-caret-down' />
            </Link>
            {dropdownJoin && <DropdownJoin />}
          </li>
          <li>
            <Link
              to='/courses'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Courses
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
