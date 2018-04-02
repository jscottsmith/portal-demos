import React from 'react';

const MessageListing = ({ name, id, handleSubmit, children }) => (
    <div className="saved-message-container">
        <button className="saved-message" onClick={() => handleSubmit(id)}>
            🔗 {name}
        </button>
        {children}
    </div>
);

export default MessageListing;
