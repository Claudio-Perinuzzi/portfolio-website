import React from 'react';
import styles from './Experience.module.css';
import { useScrollFadeIn } from '../../hooks/useScrollFadeIn';

function displayLogo(exp) {
    if (exp.fileName.includes("Steris.txt")) {
        return ( 
            <a href="https://www.steris.com/about/company" target="_blank" rel="noopener noreferrer">
                <img src={exp.logo} alt="SVG Logo" className={styles.svgLogo} /> 
            </a>
        );
    }
    else if (exp.fileName.includes("Data_Annotation_Tech.txt")) {
        return ( 
            <a href="https://www.dataannotation.tech/" target="_blank" rel="noopener noreferrer">
                <img src={exp.logo} alt="SVG Logo" className={styles.svgLogo} /> 
            </a>
        );
    }
    else if (exp.fileName.includes("CUNY_Tech_Prep.txt")) {
        return ( 
            <a href="https://cunytechprep.org/" target="_blank" rel="noopener noreferrer">
                <img src={exp.logo} alt="Default Logo" className={styles.imgContainer} />
            </a>
        );
    }
    else if (exp.fileName.includes("East_End_Hand_Surgery.txt")) {
        return ( 
            <a href="https://www.linkedin.com/company/east-end-hand-surgery/about/" target="_blank" rel="noopener noreferrer">
                <img src={exp.logo} alt="SVG Logo" className={styles.svgLogo} />
            </a>
        );
    }
    else {
        return ( <img src={exp.logo} alt="Default Logo" className={styles.imgContainer} /> );    
    }
}

function displayText(desc, idx, startOfBullet) { // Creates breaks or highlighted text based on experience data 
    // If it's a break, output <br> 2x
    if (desc.break) {
        startOfBullet.value = true;
        return (
            <React.Fragment key={idx}>
                <br />
                <br />
            </React.Fragment>
        );
    }

    // Get the text
    const textContent = (
        <span key={idx} className={desc.highlight ? styles.highlight : undefined}>
            {desc.text}
        </span>
    );

    // If it's the start of a bullet, output the bullet and text
    if (startOfBullet.value) {
        startOfBullet.value = false; // Reset flag
        return (
            <React.Fragment key={idx}>
                <span className={styles.bulletPoint}>{'>> '}</span>
                {textContent}
            </React.Fragment>
        );
    }

    // Otherwise, just output the text content (continuation of a line)
    return textContent;    
}

export const Experience = ({ experiences }) => {

    // For the experience header
    const { ref: headerRef, isVisible: headerVisible } = useScrollFadeIn(0.05);
    const headerClasses = `${styles.experienceHeader} ${headerVisible ? styles.is_visible : ''}`;

    return (
        <section id="experience">      
            
            <h1 ref={headerRef} className={headerClasses}>Experience</h1>         

            {experiences.map((exp, index) => {
                
                // For the different jobs items
                const { ref: itemRef, isVisible: itemVisible } = useScrollFadeIn(0.1 + index * 0.05);
                const itemClasses = `${styles.windowContainer} ${itemVisible ? styles.is_visible : ''}`;
                
                let startOfBullet = {value: true}; // Pass by ref
                
                return (
                <div className={itemClasses} key={index} ref={itemRef}>
                    <div className={styles.tabHeader}>{exp.fileName}</div>
                    <div className={styles.textContainer}>
                        
                        <div className={styles.logoWrapper}>
                            {displayLogo(exp)}
                        </div>

                        <div className={styles.infoGroup}>
                            <div>
                                <span className={styles.role}>Title: </span>
                                <span className={styles.roleTitle}>{exp.title}</span>
                            </div>
                            <span className={styles.time}>{exp.time}</span>
                        </div>
                        
                        <br />
                        <p className={styles.description}>
                            {exp.description.map((desc, idx) => {
                                return displayText(desc, idx, startOfBullet)
                            })}
                        </p>
                    </div>
                </div>
                );
            })}
        </section>
    );
};