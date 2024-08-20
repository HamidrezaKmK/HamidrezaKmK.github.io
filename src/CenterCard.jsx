import React, { useState, useRef } from 'react';
import './CenterCard.css'; // Create a separate CSS file for the CenterCard component if needed

const CenterCard = ({ onClick , isTreeNode, mainPageRef}) => {
    const treeClass = isTreeNode ? 'is-tree-node' : '';

    const [isTransitioning, setIsTransitioning] = useState(false);
    
    const cardRef = useRef(null);
    
    // An extention of the handleLogoClick function where it transitions the page to the clicked page
    // the function will also call the onClick function that is passed as a prop
    const handleLogoClick = () => {
        console.log('mainPageRef', mainPageRef.current);
        if (!isTreeNode && cardRef.current) {
            setIsTransitioning(false); // TODO: set to True once done!
            const cardElement = cardRef.current;
            const { top, left, width, height } = cardElement.getBoundingClientRect();
            
 

            cardElement.style.setProperty('--initial-top', `${top}px`);
            cardElement.style.setProperty('--initial-left', `${left}px`);
            
            const cardX = `10px`
            const cardY = `${window.innerHeight}px`
            
            cardElement.style.setProperty('--translate-x', cardX);
            cardElement.style.setProperty('--translate-y', cardY);

            mainPageRef.current.style.setProperty('--card-x', cardX);
            mainPageRef.current.style.setProperty('--card-y', cardY);

            setTimeout(() => {
                setIsTransitioning(false);
                onClick();
            }, 2000);
        } else {
            onClick();
        }
    }

    return  (
        <div ref={cardRef} className={`center-card shadow-md ${treeClass} ${isTransitioning ? 'transition-to-center' : ''}`}>
            <div className='my-logo' onClick={handleLogoClick}>
                <img src="/hamid.png" alt="Central" className="w-24 h-24 rounded-sm" />
            </div>
            {   
                !isTreeNode &&
                <div className="text-center mt-4 all-the-list">
                    <h2 className="text-xl font-normal text-[#7851A9] font-header">Hamid Kamkari</h2>
                    <ul className="bullet-list">
                        <li>
                            <a href="https://layer6.ai/" className="bullet-header">
                                <span className="vertical-line"></span>
                                Machine Learning Scientist
                            </a>
                        </li>
                        <li>
                            <a href="https://web.cs.toronto.edu/" className="bullet-header">
                                <span className="vertical-line"></span>
                                University of Toronto (M.Sc.)
                            </a>
                        </li>
                        <li>
                            <a href="https://ce.sharif.ir/" className="bullet-header">
                                <span className="vertical-line"></span>
                                Sharif University (B.Sc.)
                            </a>
                        </li>
                    </ul>
                </div>
            }
        </div>
        );
}

export default CenterCard;

