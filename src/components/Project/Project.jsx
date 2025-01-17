import React from 'react';
import styles from './Project.module.css';

export const Project = ( {projects} ) => {
    return (
        <section id="projects">
            <h1 className={styles.projectsHeader}>Projects</h1>
            {projects.map((proj, index) => (
                <div className={styles.windowContainer} key={index}>
                <div className={styles.tabHeader}>{proj.projHeader}</div>
                    <div className={styles.textContainer}>
                        <div className={styles.projectContainer}>
                            <span className={styles.project}>Project: </span>
                            <span className={styles.projectTitle}>{proj.title}</span>
                            <span className={styles.time}>{proj.time}</span>                            
                        </div>
                        <br />
                            <img className={styles.img} src={proj.imgPath} alt="ASL Demo GIF"/>
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
                        </div>
                    </div>
                </div>   
            ))}
        </section>
    )
}