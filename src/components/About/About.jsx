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
                        I'm a graduate student at Queens College, pursuing a Master's 
                        in Computer Science, with an expected graduation in May 2025.                        
                        <br />
                        <br />
                        I am passionate about solving real-world challenges and creating 
                        software that is accessible and impactful. Beyond my academic and 
                        professional life, I enjoy spending time in nature, hiking, 
                        and staying active.
                        <br />
                        <br />
                        Feel free to explore my work below!
                    </div>
                </div>
            </div>    
        </section>
    )
}