import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <section id="contact">
            <div className={styles.windowContainer}>
                <div className={styles.tabHeader}>Contact_Me.txt</div>
                    <div className={styles.textContainer}>
                        <div className={styles.buttonContainer}>
                            
                            <a href="mailto:perinuzzic@gmail.com">
                                <button className={styles.emailButton}>
                                    <img src="email_img.svg" alt="Email Image" className={styles.icon} />
                                    Email
                                </button>
                            </a>
    
                            <a href="https://www.linkedin.com/in/claudio-perinuzzi/" target="_blank" rel="noopener noreferrer">
                                <button className={styles.linkedin}>
                                    <img src="linkedin-plain.svg" alt="LinkedIn Logo" className={styles.icon} />
                                    LinkedIn
                                </button>
                            </a>
                        </div>
                        © Claudio Perinuzzi 2025-{new Date().getFullYear()}               
                    </div>
            </div>                
        </section>
    )
}