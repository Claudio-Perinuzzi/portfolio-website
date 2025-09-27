import React from 'react';
import styles from './Experience.module.css';

export const Experience = ({ experiences }) => {
    return (
        <section id="experience">
            <h1 className={styles.experienceHeader}>Experience</h1>
            {experiences.map((exp, index) => {
                
                let startOfBullet = true; 
                
                return (
                    <div className={styles.windowContainer} key={index}>
                        <div className={styles.tabHeader}>{exp.fileName}</div>
                        <div className={styles.textContainer}>
                            <div className={styles.roleContainer}>
                                <img src={exp.logo} alt="Logo Image" className={exp.fileName.includes("Steris.txt") ? styles.sterisLogo : styles.imgContainer} />
                                <div className={styles.textGroup}>
                                    <div className={styles.titleGroup}> 
                                        <span className={styles.role}>Title: </span>
                                        <span className={styles.roleTitle}>{exp.title}</span>
                                    </div>
                                    <span className={styles.time}>{exp.time}</span>
                                </div>
                            </div>
                            <br />
                            
                            {/* Creates breaks or highlighted text based on experience data */}
                            <p className={styles.description}>
                                {exp.description.map((desc, idx) => {
                                    
                                    // If it's a break, output <br> and set flag for next text
                                    if (desc.break) {
                                        startOfBullet = true;
                                        return <br key={idx} />;
                                    }

                                    // It's text, determine if it needs a bullet
                                    const textContent = (
                                        <span key={idx} className={desc.highlight ? styles.highlight : undefined}>
                                            {desc.text}
                                        </span>
                                    );

                                    // If it's the start of a bullet, output the bullet and text
                                    if (startOfBullet) {
                                        startOfBullet = false; // Reset flag
                                        return (
                                            <React.Fragment key={idx}>
                                                <span className={styles.bulletPoint}>{'>> '}</span>
                                                {textContent}
                                            </React.Fragment>
                                        );
                                    }

                                    // Otherwise, just output the text content (continuation of a line)
                                    return textContent;
                                })}
                            </p>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};