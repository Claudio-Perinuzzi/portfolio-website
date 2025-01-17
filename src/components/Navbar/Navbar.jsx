import React, { useState } from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.navbar}>
            
            <div className={styles.nameContainer}>
                <p className={styles.fname}>Claudio</p>
                <p className={styles.lname}>Perinuzzi</p>
            </div>

            <div className={styles.menuContainer}>
                <div 
                    className={`${styles.menuIcon} ${menuOpen ? styles.active : ''}`} 
                    onClick={toggleMenu}
                >
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
                <ul 
                    className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
                    onClick={() => setMenuOpen(false)}
                > 
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

        </nav>
    );
};
