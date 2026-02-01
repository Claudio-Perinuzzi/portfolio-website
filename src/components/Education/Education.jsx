import React from 'react';
import styles from './Education.module.css';
import { useScrollFadeIn } from '../../hooks/useScrollFadeIn';

export const Education = () => {

    const { ref: wrapperRef, isVisible } = useScrollFadeIn(0.1); 
    const wrapperClasses = `${styles.educationWrapper} ${isVisible ? styles.is_visible : ''}`;
    
    return (
        <>
            <div ref={wrapperRef} className={wrapperClasses}>
                <h1 className={styles.educationHeader}>Education</h1>
                <section className={styles.windowContainer}>

                    <div className={styles.tabHeader}>Universities.txt</div>
                    
                    {/* Card wrapper for columns */}
                    <div className={styles.cardsWrapper}>
                        <a href="https://www.qc.cuny.edu/" target="_blank" rel="noopener noreferrer">
                            <div className={styles.schoolContainer}>
                                <img src="QC_Icon.svg" alt="QC image" className={styles.schoolImg}/>
                            
                                <div className={styles.degreeDetails}> 
                                    <p className={styles.textContainer}>
                                        <span className={styles.masterHighlightColor}>Master's in Computer Science</span>
                                    </p>
                                    
                                    <p className={styles.textContainer}>
                                        <span className={styles.bachelorHighlightColor}>Bachelor's in Computer Science</span>
                                    </p>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.stonybrook.edu/" target="_blank" rel="noopener noreferrer">
                            <div className={styles.schoolContainer}>
                                <img src="SBU_Icon.svg" alt="SBU image" className={styles.schoolImg}/>
                                <div className={styles.degreeDetails}> 
                                    <p className={styles.textContainer}>
                                        <span className={styles.bachelorHighlightColor}>Bachelor's in Biology</span>
                                    </p>
                                </div>
                            </div>
                        </a> 
                    </div>                    

                </section>
            </div>
        </>
    );
};