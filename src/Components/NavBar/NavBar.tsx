import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';
import './navBar.scss'

function NavBar() {
    const navRef = useRef<HTMLElement | null>(null);

    const showNavBar = () :void => {
        navRef.current?.classList.toggle('responsive_nav');

    }
    return (
        <header>
            <a href="/">
                <h2>Nati Dev</h2>
            </a>
            <nav ref={navRef}>
                <a href="/">Home</a>
                <a href="/about">About me</a>
                <a href="/skills">Skills</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars/>
            </button>
        </header>
    )
}

export default NavBar;