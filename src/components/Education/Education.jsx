import React from 'react';
import styles from './Education.module.css';

export const Education = () => {
    return (
        <>
            <h1 className={styles.educationHeader}>Education</h1>
            <section className={styles.windowContainer}>

                <div className={styles.tabHeader}>Universities.txt</div>

                <div className={styles.schoolContainer}>
                    <img src="QC_Icon.png" alt="QC image" className={styles.schoolImg}/>
                    <div className={styles.degreeDetails}> 
                        <p className={styles.textContainer}>Master's in Computer Science</p>
                        <p className={styles.textContainer}>Bachelor's in Computer Science</p>
                    </div>
                </div>

                <div className={styles.schoolContainer}>
                    <img src="SBU_Icon.jpg" alt="SBU image" className={styles.schoolImg}/>
                    <div className={styles.degreeDetails}> 
                        <p className={styles.textContainer}>Bachelor's in Biology</p>
                    </div>
                </div>

            </section>
            
        </>
    );
};