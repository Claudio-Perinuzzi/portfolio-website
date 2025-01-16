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
                        Hi, I'm Claudio Perinuzzi! I'm pursuing a Master's in Computer Science 
                        at Queens College, graduating in May 2025. I'm passionate about machine 
                        learning and excited to create solutions for real-world challenges. In my 
                        free time, I enjoy spending time in nature, hiking, and staying active. 
                        Feel free to check my work out below!                        
                    </div>
                </div>
            </div>    
        </section>
    )
}