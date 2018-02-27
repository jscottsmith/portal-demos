import React, { Component } from 'react';

export default class Reaction extends Component {
    state = {
        isOpen: false,
    };

    toggleMenu = event => {
        this.setState(({ isOpen }) => ({
            isOpen: !isOpen,
        }));
    };

    render() {
        return <button onClick={this.toggleMenu}>Reaction</button>;
    }
}
