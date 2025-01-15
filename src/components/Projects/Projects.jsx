import React from 'react';
import styles from './Projects.module.css';

export const Projects = () => {
    return (
        <>
            <section id="projects">

                <h1 className={styles.projectsHeader}>Projects</h1>

                <div className={styles.windowContainer}>
                    <div className={styles.tabHeader}>Learn_American_Sign_Language.txt</div>
                        <div className={styles.textContainer}>
                            <div className={styles.projectContainer}>
                                <span className={styles.project}>Project: </span>
                                <span className={styles.projectTitle}>Learn-ASL</span>
                                <span className={styles.time}>December 2024</span>                            
                            </div>
                            <br />
                                <img className={styles.img} src="asl_demo.gif" alt="ASL Demo GIF"/>
                            <br />
                            <p className={styles.description}>
                                Collaborated with a team to train and fine-tune an Ultralytics YOLO 
                                object detection model for recognizing and classifying ASL (American Sign Language) gestures, 
                                achieving a precision of 97.8%. Built the backend in Python, leveraged
                                Roboflow for data preprocessing and augmentation, and contributed to 
                                developing a React-based frontend in JavaScript.
                            </p>
                            <br />
                            
                                <br />         
                                <div className={styles.buttonContainer}>
                                    <a href="https://github.com/jaynopponep/Learn-ASL" target="_blank" rel="noopener noreferrer">
                                        <button className={styles.button}>Project Link</button>
                                    </a>
                                </div>
                        </div>
                </div>    



                <div className={styles.windowContainer}>
                    <div className={styles.tabHeader}>NYC_AQI_Predictor.txt</div>
                        <div className={styles.textContainer}>
                            <div className={styles.projectContainer}>
                                <span className={styles.project}>Project: </span>
                                <span className={styles.projectTitle}>NYC AQI Predictor</span>
                                <span className={styles.time}>September 2024</span>                            
                            </div>
                            <br />
                            <img className={styles.img} src="aqi_img.png" alt="AQI Visualization"/>
                            <br />

                            <p className={styles.description}>
                                Developed a Python web app with Streamlit to visualize and predict AQI (Air Quality Index) 
                                for NYC neighborhoods. Utilized pandas for data manipulation, geopandas 
                                and folium for geospatial mapping, and scikit-learn for machine learning. 
                                The application trains a linear regression model to predict future AQI values.
                            </p>
                            <br />
                                <div className={styles.buttonContainer}>
                                    <a href="https://github.com/Claudio-Perinuzzi/nyc-air-quality-heat-map-predictor" target="_blank" rel="noopener noreferrer">
                                        <button className={styles.button}>Project Link</button>
                                    </a>
                                    <a href="https://nyc-aqi-predictor.streamlit.app/" target="_blank" rel="noopener noreferrer">
                                        <button className={styles.button}>Live Demo</button>
                                    </a>


                                </div>
                        </div>
                </div>   


                <div className={styles.windowContainer}>
                    <div className={styles.tabHeader}>Social_Media_Usage_Predictor.txt</div>
                        <div className={styles.textContainer}>
                            <div className={styles.projectContainer}>
                                <span className={styles.project}>Project: </span>
                                <span className={styles.projectTitle}>Social Media Usage Predictor</span>
                                <span className={styles.time}>May 2024</span>                            
                            </div>
                            <br />
                            <img className={styles.img} src="smup_img.png" alt="Social Media App Imagesmu"/>
                            <br />

                            <p className={styles.description}>
                                Collaborated with a teammate to develop, train and evaluate a Java-based 
                                random forest classifier model to predict social media addiction based on 
                                user-provided information, including social media habits and socioeconomic background.
                            </p>
                            <br />
                                <div className={styles.buttonContainer}>
                                    <a href="https://github.com/Claudio-Perinuzzi/social-media-usage-predictor" target="_blank" rel="noopener noreferrer">
                                        <button className={styles.button}>Project Link</button>
                                    </a>
                                    <a href="https://social-media-usage-predictor.streamlit.app/" target="_blank" rel="noopener noreferrer">
                                        <button className={styles.button}>Live Demo</button>
                                    </a>


                                </div>
                        </div>
                </div>  


                <div className={styles.windowContainer}>
                    <div className={styles.tabHeader}>PDF_Encrypt.txt</div>
                        <div className={styles.textContainer}>
                            <div className={styles.projectContainer}>
                                <span className={styles.project}>Project: </span>
                                <span className={styles.projectTitle}>PDF Encrypt</span>
                                <span className={styles.time}>July 2023</span>                            
                            </div>
                            <br />
                            <img className={styles.img} src="" alt="Under Construction"/>

                            <br />

                            <p className={styles.description}>
                                Developed a Python-based workflow automation GUI for encrypting multiple PDFs at once.
                            </p>
                            <br />
                                <div className={styles.buttonContainer}>
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <button className={styles.button}>Under Construction</button>
                                    </a>
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <button className={styles.button}>Under Construction</button>
                                    </a>


                                </div>
                        </div>
                </div>  

 
            
            </section>

        </>
    )
}