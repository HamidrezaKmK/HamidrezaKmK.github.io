    import React, { useState, useEffect, useRef } from 'react';
    import './OrbitingCircles.css';
    import parents, { aboutMe } from './data.js';
    import ContentDisplay from './ContentDisplay';

    const OrbitingCircles = () => {
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
            <div className={`orbit-container ${selectedParent ? 'orbit-reset orbit-top' : (rotating ? '' : 'orbit-top')} ${selectedChild ? 'selected-child' : ''}`}>
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
                <div className="center-card shadow-md">
                    <img src="/hamid.png" alt="Central" className="w-24 h-24 rounded-sm" />
                    <div className="text-center mt-4">
                        <h2 className="text-xl font-normal text-[#7851A9] font-header">Hamid Kamkari</h2>
                        <div className="flex justify-center space-x-2 mt-2">
                            <a href="https://twitter.com/hamid_R_kamkar" target="_blank" >
                                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#7851a9" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/hamidreza-kamkari" target="_blank" >
                                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 448 512"><path fill="#7851a9" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                            </a>
                            <a href="https://github.com/HamidrezaKmK" target="_blank" >
                                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 496 512"><path fill="#7851a9" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
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
    };

    export default OrbitingCircles;
