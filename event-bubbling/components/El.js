import React from 'react';

const El = ({ children, depth }) => (
    <div
        onClick={event => {
            handleClick(depth, event);
        }}
        className="el"
    >
        <span className="count">{depth}</span>
        {children}
    </div>
);

// Track nodes this event has bubbled through
let nodeCount = 0;

// when even has reached the window will reset the count
window.addEventListener('click', () => (nodeCount = 0));

const handleClick = (depth, event) => {
    const el = event.currentTarget;

    // Delay setting the 'event' class based on the count
    // of nodes this even has bubbled through. This just
    // visually slows down the even propogation
    setTimeout(() => {
        el.classList.add('event');
    }, nodeCount * 150);

    setTimeout(() => {
        el.classList.remove('event');
    }, nodeCount * 150 + 300);

    nodeCount += 1;
};

export default El;
