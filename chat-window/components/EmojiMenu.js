import React, { Component } from 'react';

export default class EmojiMenu extends Component {
    render() {
        return (
            <nav className="emoji-menu">
                {this.props.emojis.map((emoji, i) => (
                    <button
                        onClick={() => {
                            this.props.handleSelect(emoji.emoji);
                        }}
                        key={i}
                    >
                        {emoji.emoji}
                    </button>
                ))}
            </nav>
        );
    }
}
