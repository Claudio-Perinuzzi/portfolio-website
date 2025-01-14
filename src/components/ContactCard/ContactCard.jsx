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
                    <p className={styles.description}>I'm an Aspiring Software Developer in the New York Metro Area.</p>
                    <p className={styles.contact}>Contact me if you'd like to learn more!</p>

                    <div className={styles.buttonContainer}>
                        <a href="mailto:perinuzzic@gmail.com">
                            <button className={styles.emailButton}>Email</button>
                        </a>

                        <a href="https://github.com/Claudio-Perinuzzi" target="_blank" rel="noopener noreferrer">
                            <button className={styles.github}>Github</button>
                        </a>

                        <a href="https://www.linkedin.com/in/claudio-perinuzzi/" target="_blank" rel="noopener noreferrer">
                            <button className={styles.linkedin}>LinkedIn</button>
                        </a>
                    </div>
                </div>
        </section>
    )
}