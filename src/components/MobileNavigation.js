import React, {useState} from 'react';
import Logo from '../assets/images/logo.png';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import {motion} from 'framer-motion';

const MobileNavigation = () => {
    
    const [active, setActive] = useState('Home');
    const [open, setOpen] = useState(false);
    const animateFrom = {opacity:0, y: -40};
    const animateTo = {opacity:1, y: 0};

    return (
        <nav className='navbar-mobile'>
            <div className='navbar-logo'>
                <a href='/'>
                    <img className='logo img-fluid' src={Logo} alt='vilaash constructions' />
                </a>
            </div>
            
            { open ? <AiOutlineClose className='hamburger' size='30px' onClick={() => setOpen(!open)} /> :  <AiOutlineMenu className='hamburger' size='30px' onClick={() => setOpen(!open)} />}

            { 
            open &&
            <div className='navbar-links-mobile'>
                <ul className='nav-links-mobile'>
                    <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.05}} className={`nav-item-mobile ${active==='Home'?'active':null}`} onClick={() => {setActive('Home')
                    setOpen(!open) }}>
                        <a href='#home' style={{textDecoration: 'none', color: 'black'}}>Home</a>
                    </motion.li>
                    <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.10}} className={`nav-item-mobile ${active==='Projects'?'active':null}`} onClick={() => {setActive('Projects')
                    setOpen(!open) }}>
                        <a href='#projects' style={{textDecoration: 'none', color: 'black'}}>Projects</a>
                    </motion.li>
                    <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.20}} className={`nav-item-mobile ${active==='About'?'active':null}`} onClick={() => {setActive('About') 
                    setOpen(!open) }}>
                        <a href='#about' style={{textDecoration: 'none', color: 'black'}}>About</a>
                    </motion.li>
                    <motion.li href='#contact   ' initial={animateFrom} animate={animateTo} transition={{delay: 0.30}} className={`nav-item-mobile ${active==='Contact'?'active':null}`} onClick={() => {setActive('Contact') 
                    setOpen(!open)} }>
                        <a href='#contact' style={{textDecoration: 'none', color: 'black'}}>Contact</a>
                    </motion.li>
                </ul>
            </div>
            }   
            
        </nav>
    );
}

export default MobileNavigation;