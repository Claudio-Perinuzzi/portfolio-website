import React from 'react';
import styles from './Project.module.css';
import { useScrollFadeIn } from '../../hooks/useScrollFadeIn';

export const Project = ( {projects} ) => {

    // For the project header
    const { ref: headerRef, isVisible: headerVisible } = useScrollFadeIn(0.05);
    const headerClasses = `${styles.projectHeader} ${headerVisible ? styles.is_visible : ''}`;

    return (
        <section id="projects">
            <h1 ref={headerRef} className={headerClasses}>Projects</h1>         
            
            {projects.map((proj, index) => {

                const { ref: itemRef, isVisible: itemVisible } = useScrollFadeIn(0.1 + index * 0.05);
                const itemClasses = `${styles.windowContainer} ${itemVisible ? styles.is_visible : ''}`;

                return (
                    <div className={itemClasses} key={index} ref={itemRef}>                    
                        <div className={styles.tabHeader}>{proj.projHeader}</div>
                        <div className={styles.textContainer}>
                            <div className={styles.projectContainer}>
                                <span className={styles.project}>Project: </span>
                                <span className={styles.projectTitle}>{proj.title}</span>
                                <span className={styles.time}>{proj.time}</span>                            
                            </div>
                            <br />
                                <a href={proj.ghUrl} target="_blank" rel="noopener noreferrer" className={styles.imgContainer}>
                                    <img className={styles.img} src={proj.imgPath} alt="Project Image"/>
                                </a>
                            <br />

                            {/* Creates breaks or highlighted text based on project data */}
                            <p className={styles.description}>
                                {proj.description.map((desc, idx) => 
                                    desc.break ? (<br key={idx} />) : (<span key={idx} className={desc.highlight ? styles.highlight : undefined}>{desc.text}</span>)
                                )}
                            </p>

                            <br />
                            <br />         
                            <div className={styles.buttonContainer}>
                                <a href={proj.ghUrl} target="_blank" rel="noopener noreferrer">
                                    <button className={styles.button}>Project Link</button>
                                </a>

                                {/* Render Live Demo if Link Exists */}
                                {proj.demoUrl && (
                                    <a href={proj.demoUrl} target="_blank" rel="noopener noreferrer">
                                        <button className={styles.button}>Live Demo</button>
                                    </a>
                                )}
                                {/* Render Download if Link Exists */}
                                {proj.download && (
                                    <a href={proj.download} target="_blank" rel="noopener noreferrer">
                                        <button className={styles.button}>Download</button>
                                    </a>
                                )}
                            </div>

                                {/* Render License if it Exists */}
                                {proj.license && (
                                    <a href={proj.licenseUrl} target="_blank" rel="noopener noreferrer">
                                        <p className={styles.license}>{proj.license}</p>
                                    </a>
                                )}

                        </div>
                    </div>   
                );
            })}
        </section>
    )
}