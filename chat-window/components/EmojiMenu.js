import React, { Component } from 'react';

const EmojiMenu = ({ emojis, handleSelect }) => (
    <ul className="emoji-menu">
        {emojis.map(({ emoji }, i) => (
            <li key={i}>
                <button onClick={() => handleSelect(emoji)}>{emoji}</button>
            </li>
        ))}
    </ul>
);

export default EmojiMenu;
