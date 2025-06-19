import React from 'react';
import styles from './About.module.css';

export const About = () => {
    return (
        <section id="about">
            <h1 className={styles.aboutHeader}>About</h1>
            <div className={styles.windowContainer}>
                <div className={styles.tabHeader}>about_me.py</div>
                    <div className={styles.ideContainer}>
                        <span className={styles.import}>from</span>{" "}
                        <span className={styles.variable}>about</span>{" "}
                        <span className={styles.import}>import</span>{" "}
                        <span className={styles.function}>me</span> 
                        <br /> 
                        <br />
                        <span className={styles.vaideContainerriable}>myself</span>{" "}
                        <span className={styles.operator}>=</span>{" "}
                        <span className={styles.function}>me</span>
                        <span className={styles.parenthesis}> ()</span>
                        <br />
                        <span className={styles.function}>print</span>
                        <span className={styles.parenthesis}> (</span>
                        <span className={styles.variable}>myself</span>
                        <span className={styles.parenthesis}>)</span>
                    </div>
                <div className={styles.terminalHeader}>Terminal - zsh</div>
                <div className={styles.terminal}>
                    last login: {new Date().toLocaleString()}<br /> 
                    cp ~ % 
                    <div className={styles.pythonCommand}>python about_me.py</div>
                    <br/>
                    <br/>
                    <div className= {styles.aboutText}>
                        Hello, I'm Claudio Perinuzzi! 
                        <br />
                        <br />
                        I am a Clinical Application Software Developer and Data Manager for a private doctor's office, 
                        with a Master's in Computer Science from Queens College.                   
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