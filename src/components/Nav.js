import React, { useState } from 'react';
import logo from '../images/Logo.svg'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href='/' className='logo'>
             <img className='logo' src={logo} alt='logo'/>
            </a>

            {/*mobile navbar*/}
            <div className='menu-icon' onClick={toggleMenu}>
             <div className='bar'></div>
             <div className='bar'></div>
             <div className='bar'></div>
            </div>

            {/* nav items */}
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
             <li>
                <a href='/home'>Home</a>
             </li>
             <li>
                <a href='/home'>About</a>
             </li>
             <li>
                <a href='/home'>Services</a>
             </li>
             <li>
                <a href='/home'>Menu</a>
             </li>
             <li>
                <a href='/home'>Reservations</a>
             </li>
             <li>
                <a href='/home'>Order Online</a>
             </li>
             <li>
                <a href='/home'>Login</a>
             </li>
            </ul>

          
        </nav>
    );
};

export default Nav;