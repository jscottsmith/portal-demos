import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import MessageCreator from './MessageCreator';
import Messages from './Messages';

export default class Messenger extends Component {
    state = {
        messages: [],
    };

    handleSave = ({ title, message }) => {
        const { messages } = this.state;
        const id = messages.length;
        const newMessage = {
            title,
            message,
            id,
        };
        const newMessages = [...messages, newMessage];
        this.setState({ messages: newMessages });
    };

    render() {
        const { messages } = this.state;
        const hasSavedMessages = Boolean(messages.length);
        return (
            <article className="container">
                <h1>Messenger 📝</h1>
                <div className="form card">
                    <Messages messages={messages} />
                    <MessageCreator handleSave={this.handleSave} />
                </div>
            </article>
        );
    }
}
