// ekorbi
import React from "react";
import { Link } from 'react-scroll'
import logo from '../Images/logo.png'

export default function Navbar() {
    return (
        <div>
            <nav>
                <Link to='main' className="logo" smooth={true} duration={1000}>
                    <img src={logo} alt='logo'></img>
                </Link>
                <input className="menu-btn" type="checkbox" id='menu-btn' />
                <label className="menu-icon">
                    <span className="nav-icon"></span>
                </label>
                <label />
                <ul className="menu">
                    <li><Link to='main' className="active" smooth={true} duration={1000}>Genesis</Link></li>
                    <li><Link to='features' smooth={true} duration={1000}>Features</Link></li>
                    <li><Link to='services' smooth={true} duration={1000}>Shopping</Link></li>
                    <li><Link to='wrapper' smooth={true} duration={1000}>New</Link></li>
                    <li><Link to='subscribe' smooth={true} duration={1000}>Subscribe</Link></li>
                    
                </ul>
            </nav>
            
        </div>
    )
}