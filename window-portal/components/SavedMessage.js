import React from 'react';

const SavedMessage = ({ title, id, handleSubmit, children }) => (
    <div className="saved-message-container">
        <button className="saved-message" onClick={() => handleSubmit(id)}>
            <h2>🔗 {title}</h2>
        </button>
        {children}
    </div>
);

export default SavedMessage;
