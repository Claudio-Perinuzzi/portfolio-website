import React from 'react';
import styles from './Experience.module.css';

export const Experience = ({ experiences }) => {
    return (
        <section id="experience">
            <h1 className={styles.experienceHeader}>Experience</h1>
            {experiences.map((exp, index) => (
                <div className={styles.windowContainer} key={index}>
                    <div className={styles.tabHeader}>{exp.fileName}</div>
                    <div className={styles.textContainer}>
                        <div className={styles.roleContainer}>
                            <span className={styles.role}>Title: </span>
                            <span className={styles.roleTitle}>{exp.title}</span>
                            <span className={styles.time}>{exp.time}</span>
                        </div>
                        <br />
                        
                            {/* Creates breaks or highlighted text based on experience data */}
                        <p className={styles.description}>
                            {exp.description.map((desc, idx) => 
                                desc.break ? (<br key={idx} />) : (<span key={idx} className={desc.highlight ? styles.highlight : undefined}>{desc.text}</span>)
                            )}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
};
