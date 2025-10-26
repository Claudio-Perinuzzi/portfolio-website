import React from 'react';
import styles from './Achievements.module.css';
import { useScrollFadeIn } from '../../hooks/useScrollFadeIn';

export const Achievements = ( {achievements} ) => {

    // For the achievement header
    const { ref: headerRef, isVisible: headerVisible } = useScrollFadeIn(0.05);
    const headerClasses = `${styles.achievementHeader} ${headerVisible ? styles.is_visible : ''}`;

    // Helper function to render descriptions 
    const renderDescription = (description) => {
        return (
            <>
            <br />
            <p className={styles.description}>
                {description.map((desc, idx) => 
                    desc.break 
                        ? (<br key={idx} />) 
                        : (<span key={idx} className={desc.highlight ? styles.highlight : undefined}>{desc.text}</span>)
                )}
            </p>
            <br />
            </>
        );
    };

    // Helper function to render the title/time block for a single certification entry
    const renderAchievementEntry = (entry, indexKey) => (
        <React.Fragment key={indexKey}>
            <div className={styles.achievementContainer}>
                <span className={styles.achievement}>Achievement: </span>
                <span className={styles.achievementTitle}>{entry.title}</span>
                <span className={styles.time}>{entry.time}</span>
            </div>
            {renderDescription(entry.description)}
        </React.Fragment>
    );

    return (
        <section id="achievements">
            <h1 ref={headerRef} className={headerClasses}>Achievements</h1>         
            
            {achievements.map((ach, index) => {

                const { ref: itemRef, isVisible: itemVisible } = useScrollFadeIn(0.1 + index * 0.05);
                const itemClasses = `${styles.windowContainer} ${itemVisible ? styles.is_visible : ''}`;

                return (
                    <div className={itemClasses} key={index} ref={itemRef}>                    
                        <div className={styles.tabHeader}>{ach.achHeader}</div>
                        <div className={styles.textContainer}>
                            <a href={ach.url}>
                                <img className={styles.img} src={ach.imgPath} alt="image for achievement"/>
                            </a>

                            {ach.certifications && ach.certifications.length > 0 ? (
                                ach.certifications.map((cert, certIndex) => (
                                    renderAchievementEntry(cert, `${index}-${certIndex}`)
                                ))
                            ) : (
                                <>
                                    {renderAchievementEntry(ach, index)}
                                </>
                            )}
                        </div>
                    </div>
                );
            })}
        </section>
    )

};