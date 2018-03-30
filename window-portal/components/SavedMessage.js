import React from 'react';

const SavedMessage = ({ title, id, handleSubmit }) => (
    <button className="saved-message" onClick={() => handleSubmit(id)}>
        <h2>🔗 {title}</h2>
    </button>
);

export default SavedMessage;
