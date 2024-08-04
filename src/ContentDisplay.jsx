import React, { useEffect, useState } from 'react';

const ContentDisplay = ({ contentPath }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        if (contentPath) {
            fetch(contentPath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(html => setContent(html))
                .catch(error => console.error('Error fetching content:', error));
        }
    }, [contentPath]);

    return (
        <div dangerouslySetInnerHTML={{ __html: content }} />
    );
};

export default ContentDisplay;
