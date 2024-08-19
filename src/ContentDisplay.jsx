import React, { useEffect, useState } from 'react';

const ContentDisplay = ({ contentPaths }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        if (contentPaths && contentPaths.length > 0) {
            const fetchAllContent = async () => {
                try {
                    const allContent = await Promise.all(
                        contentPaths.map(async (path) => {
                            const response = await fetch(path);
                            if (!response.ok) {
                                throw new Error(`Network response was not ok for ${path}`);
                            }
                            return response.text();
                        })
                    );
                    console.log('allContent:', allContent.join('\n'));
                    setContent(allContent.join('\n')); // Concatenate all the content
                } catch (error) {
                    console.error('Error fetching content:', error);
                }
            };

            fetchAllContent();
        }
    }, [contentPaths]);

    return (
        <div dangerouslySetInnerHTML={{ __html: content }} />
    );
};

export default ContentDisplay;
