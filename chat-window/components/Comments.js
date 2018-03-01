import React from 'react';

const Chat = ({ comments }) => (
    <div className="comments">
        {comments.map(comment => (
            <p
                className={
                    comments.author === 'me' ? 'comment-me' : 'comment-bot'
                }
            >
                {comment.text}
            </p>
        ))}
    </div>
);

export default Chat;
