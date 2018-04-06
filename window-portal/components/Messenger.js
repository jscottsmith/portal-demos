import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import MessageCreator from './MessageCreator';
import SavedMessages from './SavedMessages';

class Messenger extends Component {
    state = {
        messages: [],
        usePortal: false,
    };

    handleSave = ({ name, message }) => {
        const { messages } = this.state;
        const id = messages.length;
        // set some defaults for lazy people
        const newMessage = {
            name: name || 'Anonymous',
            message: message || '¯\\_(ツ)_/¯',
            id,
        };
        const newMessages = [...messages, newMessage];
        this.setState({ messages: newMessages });
    };

    render() {
        const { messages, usePortal } = this.state;
        const hasSavedMessages = !!messages.length;
        return (
            <article className="container">
                <h1>Messenger 📝</h1>
                <div className="form card">
                    <MessageCreator handleSave={this.handleSave} />
                    <SavedMessages messages={messages} usePortal={usePortal} />
                </div>
                <button
                    className="portal-toggle btn"
                    onClick={() => this.setState(({ usePortal }) => ({ usePortal: !usePortal }))}>
                    {usePortal ? 'Disable Portal' : 'Activate Portal'}
                </button>
            </article>
        );
    }
}

export default Messenger;
