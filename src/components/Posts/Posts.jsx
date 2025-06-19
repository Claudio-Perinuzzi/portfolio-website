import React, { useEffect } from 'react';
import styles from './Posts.module.css';
import { posts, instagramEmbedScriptUrl } from './postData'; 

// Helper component to render a single Instagram embed
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
        const loadInstagramEmbedScript = () => {
            if (!document.querySelector(`script[src="${instagramEmbedScriptUrl}"]`)) {
                const script = document.createElement('script');
                script.src = instagramEmbedScriptUrl;
                script.async = true;
                script.id = "instagram-embed-script";
                document.body.appendChild(script);

                script.onload = () => {
                    if (window.instgrm && window.instgrm.Embeds && window.instgrm.Embeds.process) {
                        window.instgrm.Embeds.process();
                    }
                };
                script.onerror = (error) => {
                    console.error("Failed to load Instagram embed script:", error);
                };
            } 
            else {
                if (window.instgrm && window.instgrm.Embeds && window.instgrm.Embeds.process) {
                    window.instgrm.Embeds.process();
                }
            }
        };

        loadInstagramEmbedScript();
    }, []);

    return (
        <section className={styles.portfolioPostsSection} id="interests">
            <h2 className={styles.postsSectionHeader}>Interests</h2>

            <p className={styles.interestText}>
                Much of my discipline and personal success stems from my long-standing practice of martial arts.  
                I hold a 2nd-degree rank from Alan Lee's Chinese Kung-Fu Wu-Su Association 
                (<a href="https://kungfuwusu.com/" target="_blank" rel="noopener noreferrer">kungfuwusu.com</a>) and have had the privilege of teaching this rich and powerful art form.  
                Here are a few related posts showcasing my journey and some personal interests of mine:
            </p>

            <div className={styles.instagramPostsGrid}>
                {posts.map(post => (
                    <SingleInstagramEmbed // Render the helper component for each post
                        key={post.id}
                        embedHtml={post.embedHtml} 
                    />
                ))}
            </div>
        </section>
    );
};