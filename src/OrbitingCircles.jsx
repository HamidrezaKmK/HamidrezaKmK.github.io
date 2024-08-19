import React, { useState, useEffect, useRef, forwardRef } from 'react';
import './OrbitingCircles.css';
import parents, { aboutMe } from './data.js';
import ContentDisplay from './ContentDisplay';
import CenterCard from './CenterCard.jsx';

const OrbitingCircles = forwardRef(({active, ...props}, ref) => {

    const [rotating, setRotating] = useState(true);
    const [selectedParent, setSelectedParent] = useState(null);
    const [selectedChild, setSelectedChild] = useState(null);
    const [childClicked, setChildClicked] = useState(false);
    const [lineY, setLineY] = useState(0);
    const [topY, setTopY] = useState(0);

    const [selectedGrandchild, setSelectedGrandchild] = useState(null);
    const parentRef = useRef(null);
    const childrenRefs = useRef([]);
    const outerParentRefs = useRef([]);
    const grandchildRefs = useRef([]);

    useEffect(() => {
        if (rotating) {
            document.documentElement.style.setProperty('--animation-play-state', 'running');
        } else {
            document.documentElement.style.setProperty('--animation-play-state', 'paused');
        }
    }, [rotating]);

    const handleClick = (parent) => {
        if (selectedParent && selectedParent.id === parent.id) {
            setSelectedParent(null);
            setRotating(true);
            setSelectedChild(null);
            setChildClicked(false);
            setSelectedGrandchild(null);
        } else {
            setSelectedParent(parent);
            setRotating(false);
            setSelectedChild(null);
            setChildClicked(false);
            setSelectedGrandchild(null);
        }
    };

    const handleChildClick = (child) => {
        if (selectedChild && selectedChild.id === child.id) {
            setSelectedChild(null);
            setSelectedGrandchild(null);
            setLineY(0)
            setTopY(0)
        } else {
            if (selectedChild) {
                setLineY(400)
                setTopY(27)
            }
            setSelectedChild(child);
            setChildClicked(true);
            setSelectedGrandchild(null);
        }
    };
    const handleGrandchildClick = (grandchild) => {
        if (selectedGrandchild?.id === grandchild.id) {
            setSelectedGrandchild(null);
            setSelectedChild(null);
            setLineY(0)
            setTopY(0)
        } else {
            if (selectedGrandchild) {
                setLineY(400)
                setTopY(27)
            }
            setSelectedGrandchild(grandchild);
        }
    };

    const getChildPosition = (index, total, isMobile) => {
        let left;
        if (isMobile) {
            const start = -366.667;
            const end = 266.667;
            const gap = (end - start) / (total - 1);
            left = start + (gap * index);
        } else {
            const gap = 1800 / (total + 1);
            left = gap * (index + 1) - 900;
        }
        const translateY = isMobile ? '550%' : '460%';
        const x = isMobile ? '10%' : '50%'
        return {
            transform: `translate(${x}, 150%) translateY(${translateY})`
        };
    };
    const getGrandchildPosition = (index, total, isMobile) => {
    const radius = isMobile ? 150 : 250;
        const angle = (index / total) * 2 * Math.PI;
    
        const left = radius * Math.cos(angle);
        const top = radius * Math.sin(angle);
    
        return {
        transform: `translate(${left + 1800}%, ${top + 2300}%)`
        };
    };
    
    const getCoordinates = (ref) => {
        if (ref && ref.getBoundingClientRect) {
            const rect = ref.getBoundingClientRect();
            return {
                x: rect.left + rect.width / 2,
            y: rect.top + rect.height + 240 / 1,
            };
        }
    return { x: 850, y: 700 };
    };
    
    
    const parentCoordinates = selectedParent ? getCoordinates(parentRef.current) : null;
    const childrenCoordinates = selectedParent
    ? selectedParent.children.map((_, index) => getCoordinates(childrenRefs.current[index]))
        : [];
    
    const outerParentCoordinates = selectedParent
    ? selectedParent.children.map((_, index) => getCoordinates(childrenRefs.current[index]))
        : [];
    const childContent = selectedChild || aboutMe.children.find(child => child.id === 61);
    return (
        <div ref={ref} className={`orbit-container ${active ? '' : 'deactive'}`}>
            <div className="orbit-inner">
                {parents.slice(0, 4).map((parent, index) => (
                    <div
                        key={parent.id}
                        className={`orbit-image orbit-inner-${index + 1} ${selectedParent && parent.id === selectedParent.id ? 'selected' : ''}`}
                        onClick={() => handleClick(parent)}
                        ref={parent.id === selectedParent?.id ? parentRef : null}
                    >
                        <img src={parent.image} alt={parent.name} className="w-16 rounded-full" />
                        <div className="tooltip">{parent.name}</div>
                    </div>
                ))}
            </div>
                <CenterCard
                    onClick={() => null}
                    isTreeNode={true}
                />
            <div className="orbit-outer">
                {parents.slice(4).map((parent, index) => (
                    <div
                        key={parent.id}
                        className={`orbit-image orbit-outer-${index + 1} ${selectedParent && parent.id === selectedParent.id ? 'selected' : ''}`}
                        onClick={() => handleClick(parent)}
                        ref={el => outerParentRefs.current[index] = el}
                    >
                        <img src={parent.image} alt={parent.name} className="w-16 rounded-full" />
                        <div className="tooltip" dangerouslySetInnerHTML={{ __html: parent.name }}/>
                    </div>
                ))}
            </div>
            {selectedParent && (
                <div className="children-container">
                    {selectedParent.children.map((child, index) => (
                        <div
                            key={child.id}
                            className={`child-node child-node-${index} ${selectedChild && selectedChild.id === child.id ? 'selectedchild' : ''}`}
                            style={getChildPosition(index, selectedParent.children.length, window.innerWidth <= 768)}
                            onClick={() => handleChildClick(child)}
                            ref={el => childrenRefs.current[index] = el}
                        >
                            <img src={child.image} alt={child.name} className="md:w-16 md:h-16 w-10 h-10 object-fill rounded-full" />
                            <div className="tooltip" dangerouslySetInnerHTML={{ __html: child.name }} />
                        </div>
                    ))}
                </div>
            )}
            {selectedChild && selectedChild.children && selectedChild.children.length > 0 && (
                <div className="grandchildren-container">
                    {selectedChild.children.map((grandchild, index) => (
                        <div
                            key={grandchild.id}
                            className={`orbit-image grandchild-${index} ${selectedGrandchild?.id === grandchild.id ? 'selected' : ''}`}
                            onClick={() => {
                                handleGrandchildClick(grandchild);
                            }}
                            ref={el => grandchildRefs.current[index] = el}
                            style={getGrandchildPosition(index, selectedChild.children.length, true)}
                        >
                            <img src={grandchild.image} alt={grandchild.name} className="w-8 rounded-full" />
                            <div className="tooltip">{grandchild.name}</div>
                        </div>
                    ))}
                </div>
            )}

            {childContent && (
                    <div className="selected-child-content rounded-3xl">
                        <h2 className='text-[#7851A9] font-semibold font-header my-2 text-2xl px-[20px]'>{childContent.name}</h2>
                        <ContentDisplay contentPath={childContent.content} />
                    </div>
            )}

            {selectedGrandchild && (
                <div className="selected-grandchild-content rounded-3xl">
                    <h2 className='text-[#7851A9] font-semibold font-header my-2 text-2xl px-[20px]'>{selectedGrandchild.name}</h2>
                    <ContentDisplay contentPath={selectedGrandchild.content} />
                </div>
            )}

            {selectedParent && childClicked && parents.slice(0, 4).some(parent => parent.id === selectedParent.id) && (
                <svg className={`line-svg ${selectedChild ? 'selected-child' : 'unselected-child'}`} style={{ transform: topY !== 0 ? `translateY(${topY}%)` : '', display: 'none' }}>
                    {childrenCoordinates.map((childCoords, index) => (
                        <line
                            key={index}
                            x1={parentCoordinates.x}
                            y1={lineY !== 0 ? lineY : parentCoordinates.y}
                            x2={childCoords.x}
                            y2={childCoords.y}
                            stroke="#7851A9"
                            strokeWidth="2"
                            className='line'
                        />
                    ))}
                </svg>
            )}
            {selectedParent && childClicked && parents.slice(4).some(parent => parent.id === selectedParent.id) && (
                <svg className={`line-svg-outer ${selectedChild ? 'selected-child' : 'unselected-child'}`} style={{ transform: topY !== 0 ? `translateY(${topY + 5}%)` : '' , display: 'none'}}>
                    {outerParentCoordinates.map((outerCoords, index) => {
                        const y1 = !selectedChild && parentCoordinates.y === 700 ? 420 : (lineY !== 0 ? lineY : parentCoordinates.y);
                        return (
                            <line
                                key={index}
                                x1={parentCoordinates.x}
                                y1={y1}
                                x2={outerCoords.x}
                                y2={outerCoords.y}
                                stroke="#7851A9"
                                strokeWidth="2"
                                className='line'
                            />
                        )
                    }
                    )}
                </svg>
            )}
        </div>
    );
});

export default OrbitingCircles;
