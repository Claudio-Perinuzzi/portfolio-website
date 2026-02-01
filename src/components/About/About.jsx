import React from 'react';
import styles from './About.module.css';

export const About = () => {
    return (
        <section id="about">
            <h1 className={styles.aboutHeader}>About</h1>
            <div className={styles.windowContainer}>

                <div className={styles.terminalHeader}>Terminal - bash</div>
                <div className={styles.terminal}>
                    Last login: {new Date().toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' })}<br />
                    <span className={styles.userTerminal}>cp@localhost</span>
                    :
                    <span className={styles.tilde}>~</span>
                    $
                    <div className={styles.bashCommand}>cat about_me.txt</div>
                    <br/>
                    <br/>
                    <div className= {styles.aboutText}>
                        Hello, I'm Claudio Perinuzzi! 
                        <br />
                        <br />
                        I am currently a Software Integration Engineer at STERIS with a Master's Degree in Computer Science.
                        I have previously worked as a Software Application Developer/Analyst for East End Hand Surgery for over 9 years. 
                        I enjoy analyzing complex tasks, developing clear workflows, and implementing software solutions that 
                        streamline operations. I am also passionate about solving real-world challenges 
                        and creating software that is accessible and impactful. 
                        <br />
                        <br />
                        Beyond my academic and professional life, I enjoy spending time in nature,
                        practicing martial arts, hiking, and staying active.
                        <br />
                        <br />
                        Feel free to explore my work below!
                    </div>
                </div>
            </div>    
        </section>
    )
}