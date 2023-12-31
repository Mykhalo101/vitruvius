import React, {useState , useEffect} from 'react';
import { Button } from './Button'; // Use a relative import path
import './Navbar.css'


import {Link} from 'react-router-dom'
const Navbar = () => {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);
    console.log("Navbar component rendering"); // Add this line
    const handleClick = () => setClick(!click);
    const [button, setButton] = useState(true);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }   
    };
    useEffect(() => {showButton()},[]) //Generates once and that's it. 
    window.addEventListener('resize', showButton);
    return (
        <>
        <nav className= "navbar">
            <div className = "navbar-container">
                <Link to = "/" className="navbar-logo" onClick = {closeMobileMenu}>
                    Vitruvius
                </Link> 
                <div className = 'menu-icon' onClick = {handleClick}>
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                <li className = 'nav-item'>
                    <Link to = '/' className = 'nav-links' onClick = {closeMobileMenu}>
                    Home
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to = '/services' className = 'nav-links' onClick = {closeMobileMenu}>
                    Services
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to = '/products' className = 'nav-links' onClick = {closeMobileMenu}>
                    Products
                    </Link>

                </li>
                <li className = 'nav-item'>
                    <Link to = '/sign-up' className = 'nav-links-mobile' onClick = {closeMobileMenu}>
                    Sign Up
                    </Link>
                </li>
            </ul>
              {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>

        </nav>
        </>
    );
}

export default Navbar;
