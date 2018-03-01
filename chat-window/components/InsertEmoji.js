import React, { Component } from 'react';

export default class InsertEmoji extends Component {
    render() {
        return (
            <button
                onClick={() => {
                    this.props.handleSelect(this.props.emoji.emoji);
                }}
            >
                {this.props.emoji.emoji}
            </button>
        );
    }
}
