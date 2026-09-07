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
                        My journey started with a degree in Biology, where I was fascinated by human physiology 
                        and medicine. Realizing I had a natural knack for technology, I went on to pursue 
                        a Master’s in Computer Science to help build software that has a direct, meaningful impact 
                        on people's lives.    
                        <br />
                        <br />
                        Currently, I work as a Software Integration Engineer at STERIS. My work lives on the ground 
                        in hospital networks, ensuring that critical data pipelines, medical device APIs, and EMR 
                        integrations function flawlessly when a patient is on the operating table. Before this, 
                        I spent over nine years as a Software Developer & Analyst at East End Hand Surgery, 
                        where I built custom automation tools that saved clinical staff over 14 hours weekly.
                        For me, software engineering and integration is a way to indirectly contribute to patient care. 
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