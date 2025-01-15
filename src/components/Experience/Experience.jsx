import React from 'react';
import styles from './Experience.module.css';

export const Experience = () => {
    return (
        <>
            <section id="experience">

                <h1 className={styles.experienceHeader}>Experience</h1>

                <div className={styles.windowContainer}>
                    <div className={styles.tabHeader}>East_End_Hand_Surgery.txt</div>
                        <div className={styles.textContainer}>
                            <div className={styles.roleContainer}>
                                <span className={styles.role}>Title: </span>
                                <span className={styles.roleTitle}>Data Manager</span>
                                <span className={styles.time}>Present</span>                            
                            </div>
                            <br />
                            <p className={styles.description}>
                                I manage and organize over 2 terabytes of internal records, 
                                ensuring data integrity and security of backups. 
                                <br />
                                <br />
                                Additionally, I develop <span className={styles.highlight}>Python-based software</span> 
                                to streamline repetitive tasks like folder creation and password protection for multiple PDFs, 
                                <span className={styles.highlight}>saving my team more than 8 hours each month.</span>
                            </p>
                        </div>
                </div>    

                <div className={styles.windowContainer}>
                    <div className={styles.tabHeader}>CUNY_Tech_Prep.txt</div>
                        <div className={styles.textContainer}>
                            <div className={styles.roleContainer}>
                                <span className={styles.role}>Title: </span>
                                <span className={styles.roleTitle}>Data Science & Software Engineer Fellow</span>
                                <span className={styles.time}>Present</span>                            
                            </div>
                            <br />
                            <p className={styles.description}>
                                Utilize machine learning and data science techniques such as 
                                <span className={styles.highlight}>data engineering, data visualization, model evaluation and optimization.</span>
                                <br />
                                <br />
                                Additionally, I have gained hands-on experience in software engineering practices, 
                                including <span className={styles.highlight}>software design, system architecture, 
                                version control, and front-end development with React,</span> to create interactive and dynamic user interfaces.
                            </p>
                        </div>
                </div>   
            
            </section>

        </>
    )
}