import React, {useState} from 'react';
import Logo from '../assets/images/logo.png';
import '../assets/styles/navigation.css';

const Navigation = () => {
    const [active, setActive] = useState('Home');
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <a href='/'>
                    <img className='logo img-fluid' src={Logo} alt='vilaash constructions' />
                </a>
            </div>
            <div className='navbar-links'>
                <ul className='nav-links'>
                    <li href='#home' className={`nav-item ${active==='Home'?'active':null}`} onClick={() => setActive('Home')}>
                        <a href='#home' style={{textDecoration: 'none', color: 'black'}}> Home</a>
                    </li>
                    <li className={`nav-item ${active==='Projects'?'active':null}`} onClick={() => setActive('Projects')}>
                        <a href='#projects' style={{textDecoration: 'none', color: 'black'}}> Projects </a>
                    </li>
                    <li className={`nav-item ${active==='About'?'active':null}`} onClick={() => setActive('About')}>
                        <a href='#about' style={{textDecoration: 'none', color: 'black'}}>About</a>
                    </li>
                    <li href='#contact' className={`nav-item ${active==='Contact'?'active':null}`} onClick={() => setActive('Contact')}>
                        <a href='#contact' style={{textDecoration: 'none', color: 'black'}}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;