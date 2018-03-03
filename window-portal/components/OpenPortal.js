import React, { Component } from 'react';
import { fetchPeople } from '../actions/fetchPeople';

export default class OpenPortal extends Component {
    state = {
        message: null,
    };

    handleFetch = () => {
        fetchPeople().then(people => {
            this.handleOpenPortal();
        });
    };

    handleOpenPortal = () => {
        try {
            this.portalWindow = window.open('', 'WINDOW_PORTAL');
            const { document } = this.portalWindow.window;
            this.portalDoc = document;
            this.portalDoc.body.innerHTML = 'hello';
        } catch (error) {
            console.log('Oh no.', error.message);
            this.setState({ message: error.message });
        }
    };

    render() {
        return (
            <div className="screen">
                <p>Opens a new window after content is "Uploaded"</p>
                <input />
                <button onClick={this.handleFetch}>Fetch Data</button>
                {this.state.message && <p>Oh no. {this.state.message}</p>}
            </div>
        );
    }
}
