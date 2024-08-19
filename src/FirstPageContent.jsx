import React from 'react';
import './FirstPageContent.css'; // Create a separate CSS file for the CenterCard component if needed
import ContentDisplay from './ContentDisplay';

const FirstPageContent = () => {

    return  (
        <main className="main-content">
            <>
            <h1 className="text-xl font-normal text-[#7851A9] font-header">About Me</h1>
            <ContentDisplay contentPaths={['./content/about_me/about.html']}/>
            <h1 className="text-xl font-normal text-[#7851A9] font-header">News</h1>
            <ContentDisplay contentPaths={['./content/news/news.html']}/>
            </>
        </main>
    );
}

export default FirstPageContent;

