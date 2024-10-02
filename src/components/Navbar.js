import React from 'react';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import '../assets/styles/navigation.css';

const Navbar = () => {
    
    return (
        <div className='sticky-top parent-navbar-component'>
            <Navigation />
            <MobileNavigation />
        </div>
    );
}

export default Navbar;