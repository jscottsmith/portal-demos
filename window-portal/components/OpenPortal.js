import React, { Component } from 'react';

export default class OpenPortal extends Component {
    handleOpenPortal = () => {
        this.portalWindow = window.open('', 'OPEN_PORTAL');
        const { document } = this.portalWindow.window;
        this.portalEl = document;
    };

    render() {
        return (
            <div className="screen">
                <p>Opens a new window after content is "Uploaded"</p>
                <input />
                <button onClick={this.handleOpenPortal}>Open Portal</button>
            </div>
        );
    }
}
