import React from 'react';

const Chat = ({ comments }) => (
    <div className="chat">
        {comments.map(comment => (
            <p
                className={`comment ${
                    comment.author === 'me' ? ' me' : ' bot'
                }`}
            >
                {comment.text}
            </p>
        ))}
    </div>
);

export default Chat;
