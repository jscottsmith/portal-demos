import React, { Component } from 'react';
import MessagePortal from './MessagePortal';

const Messages = ({ messages }) => {
    const hasSavedMessages = Boolean(messages.length);
    return (
        <div className="saved-messages">
            {hasSavedMessages &&
                messages.map(message => <MessagePortal key={message.id} message={message} />)}
        </div>
    );
};

export default Messages;
