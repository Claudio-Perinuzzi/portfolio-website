import React from 'react';
import styles from './Education.module.css';

export const Education = () => {
    return (
        <>
            <h1 className={styles.educationHeader}>Education</h1>
            <section className={styles.windowContainer}>

                <div className={styles.tabHeader}>Universities.txt</div>

                <div className={styles.schoolContainer}>
                    <a href="https://www.qc.cuny.edu/" target="_blank" rel="noopener noreferrer">
                        <img src="QC_Icon.svg" alt="QC image" className={styles.schoolImg}/>
                    </a>
                    
                    <div className={styles.degreeDetails}> 
                        <p className={styles.textContainer}>
                            <span className={styles.masterHighlightColor}>Master's in Computer Science</span>
                        </p>
                        
                        <p className={styles.textContainer}>
                            <span className={styles.bachelorHighlightColor}>Bachelor's in Computer Science</span>
                        </p>
                    </div>
                </div>

                <div className={styles.schoolContainer}>
                    <a href="https://www.stonybrook.edu/" target="_blank" rel="noopener noreferrer">
                        <img src="SBU_Icon.svg" alt="SBU image" className={styles.schoolImg}/>
                    </a>                    
                <div className={styles.degreeDetails}> 
                        <p className={styles.textContainer}>
                            <span className={styles.bachelorHighlightColor}>Bachelor's in Biology</span>
                        </p>
                    </div>
                </div>

            </section>
            
        </>
    );
};