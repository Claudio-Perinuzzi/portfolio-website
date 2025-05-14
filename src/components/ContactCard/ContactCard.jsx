import React from 'react';
import styles from './ContactCard.module.css';

export const ContactCard = () => {
    return (
        <section className={styles.contactContainer}>
            <img src="headshot_square.png" alt="Image of me" className={styles.contactImg}/>
                
                <div className={styles.textContainer}>
                    <div className={styles.nameContainer}>
                        <h1 className={styles.fname}>Claudio</h1>
                        <h1 className={styles.lname}>Perinuzzi</h1>
                    </div>
                    
                    <p className={styles.description}>I'm a Clinical Application Software Developer</p>
                    <p className={styles.contact}>Contact me if you'd like to learn more!</p>

                    <div className={styles.buttonContainer}>
                        <a href="mailto:perinuzzic@gmail.com">
                            <button className={styles.emailButton}>
                                <img src="email_img.svg" alt="Email Image" className={styles.icon} />
                                Email
                            </button>
                        </a>

                        <a href="https://github.com/Claudio-Perinuzzi" target="_blank" rel="noopener noreferrer">
                            <button className={styles.github}>
                                <img src="github-original.svg" alt="GitHub Logo" className={styles.icon} />
                                Github
                            </button>
                        </a>

                        <a href="https://www.linkedin.com/in/claudio-perinuzzi/" target="_blank" rel="noopener noreferrer">
                            <button className={styles.linkedin}>
                                <img src="linkedin-plain.svg" alt="LinkedIn Logo" className={styles.icon} />
                                LinkedIn
                            </button>
                        </a>
                    </div>

                    <div className={styles.resumeContainer}>
                        <a href="resume_2025.pdf" target="_blank" rel="noopener noreferrer">
                            <button className={styles.resume}>
                                <img src="resume_img.svg" alt="LinkedIn Logo" className={styles.icon} />
                                Resume
                            </button>
                        </a>
                    </div>
                </div>
        </section>
    )
}