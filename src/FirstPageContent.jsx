import React, { useState } from 'react';
import './FirstPageContent.css'; // Create a separate CSS file for the CenterCard component if needed
import ContentDisplay from './ContentDisplay';

const AboutTalksNews = () => {
    const [aboutText, setAboutText] = useState('About Me');
    const [clickedAbout, setClickedAbout] = useState(false);

    const handleHover = () => {
        setAboutText(clickedAbout ? 'About Me?' : 'About Me?');
    };

    const handleLeave = () => {
        setAboutText('About Me');
    };

    const handleClick = () => {
        setClickedAbout(!clickedAbout);
        setAboutText('About Me');
    };

    return (
        <main className="main-content">
            <>
                <h1
                    className="text-xl font-normal text-[#7851A9] font-header about-me"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={handleClick}
                    style={{ cursor: 'pointer' }}
                >
                    {aboutText}
                </h1>
                <ContentDisplay contentPaths={['./content/about_me/about.html']} />
                <h2 className="text-xl font-normal text-[#7851A9] font-header">Talks</h2>
                <ContentDisplay contentPaths={['./content/talks/talks.html']} />
                <h2 className="text-xl font-normal text-[#7851A9] font-header">News</h2>
                <ContentDisplay contentPaths={['./content/news/news.html']} />
            </>
        </main>
    );
}

const Publications = () => {
    return (
        <main className="main-content">
            <h2 className="text-xl font-normal text-[#7851A9] font-header">Publications</h2>
            <ContentDisplay contentPaths={['./content/publications/list.html']} />
        </main>
    );
}

const FirstPageContent = ({ selectedPage }) => {
    return (
        <>
            {selectedPage === 'home' && <AboutTalksNews />}
            {selectedPage === 'publications' && <Publications />}
        </>
    )
}

export default FirstPageContent;