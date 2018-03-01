import React, { Component } from 'react';

const EmojiMenu = ({ emojis, handleSelect }) => (
    <nav className="emoji-menu">
        {emojis.map(({ emoji }, i) => (
            <button
                onClick={() => {
                    handleSelect(emoji);
                }}
                key={i}
            >
                {emoji}
            </button>
        ))}
    </nav>
);

export default EmojiMenu;
