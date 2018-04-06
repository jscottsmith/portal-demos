import React, { Fragment } from 'react';
import SavedMessage from './SavedMessage';

const SavedMessages = ({ messages, usePortal }) => {
    const hasSavedMessages = Boolean(messages.length);
    return (
        <Fragment>
            {hasSavedMessages && <h2>Saved Messages</h2>}
            <div className="saved-messages">
                {hasSavedMessages &&
                    messages.map(message => (
                        <SavedMessage key={message.id} message={message} usePortal={usePortal} />
                    ))}
            </div>
        </Fragment>
    );
};

export default SavedMessages;
