import React, { useEffect } from 'react';
import styles from './Posts.module.css';
import { posts, instagramEmbedScriptUrl } from './postData';
import { useScrollFadeIn } from '../../hooks/useScrollFadeIn';

// --- Configuration Variables ---
// Define the URL for the Elfsight script (moved outside the component for clarity)
const elfsightScriptUrl = "https://elfsightcdn.com/platform.js"; 

// Helper component to render a single Instagram embed (LEGACY - Keep this for the native embeds)
const SingleInstagramEmbed = ({ embedHtml }) => {
    const createMarkup = () => {
        return { __html: embedHtml };
    };

    return (
        <div
            className={styles.postContainer} // Apply individual post styles
            dangerouslySetInnerHTML={createMarkup()}
        />
    );
};

export const Posts = () => {
    useEffect(() => {
        // 1. Function to Load Native Instagram Embed Script (LEGACY!)
        const loadInstagramEmbedScript = () => {
            if (!document.querySelector(`script[src="${instagramEmbedScriptUrl}"]`)) {
                const script = document.createElement('script');
                script.src = instagramEmbedScriptUrl;
                script.async = true;
                script.id = "instagram-embed-script";
                document.body.appendChild(script);

                // Run the process function once the script is loaded
                script.onload = () => {
                    if (window.instgrm && window.instgrm.Embeds && window.instgrm.Embeds.process) {
                        window.instgrm.Embeds.process();
                    }
                };
                script.onerror = (error) => {
                    console.error("Failed to load native Instagram embed script:", error);
                };
            } 
            // If already loaded, process any new content
            else if (window.instgrm && window.instgrm.Embeds && window.instgrm.Embeds.process) {
                window.instgrm.Embeds.process();
            }
        };

        // 2. Function to Load Elfsight Script 
        const loadElfsightScript = () => {
            if (!document.querySelector(`script[src="${elfsightScriptUrl}"]`)) {
                const script = document.createElement('script');
                script.src = elfsightScriptUrl;
                script.async = true;
                script.id = "elfsight-embed-script"; 
                document.body.appendChild(script);
                            }
        };

        // LEGACY COMMENTED OUT 
        // loadInstagramEmbedScript();
        loadElfsightScript();
        
    }, []); // Run only once on component mount

    // Applied to the whole section
    const { ref: headerRef, isVisible: headerVisible } = useScrollFadeIn(0.05);
    const headerClasses = `${styles.portfolioPostsSection} ${headerVisible ? styles.is_visible : ''}`;

    return (
        <section ref={headerRef} className={headerClasses} id="interests">
            <h2 className={styles.postsSectionHeader}>Interests</h2>

            <p className={styles.interestText}>
                Much of my discipline and personal success stems from my long-standing practice of martial arts.  
                I hold a 2nd-degree rank from Alan Lee's Chinese Kung-Fu Wu-Su Association 
                (<a href="https://kungfuwusu.com/" target="_blank" rel="noopener noreferrer">kungfuwusu.com</a>) and have had the privilege of teaching this rich and powerful art form.  
                Here are a few related posts showcasing my journey and some personal interests of mine:
            </p>

            {/* Placeholder for the Elfsight. Script is loaded in useEffect, and it will inject the feed here.*/}
            <div className="elfsight-app-8153dc7f-1bf3-46ca-accb-f1d564f38153" data-elfsight-app-lazy></div>

            {/* LEGACY POSTS, KEPT HERE FOR FUTURE USE OR REFERENCE */}
            {/* <div className={styles.instagramPostsGrid}>
                {posts.map(post => (
                    <SingleInstagramEmbed // These are your original native embeds
                        key={post.id}
                        embedHtml={post.embedHtml} 
                    />
                ))}
            </div> */}
        </section>
    );
};