import React, { Component } from 'react';

export default class Chat extends Component {
    componentDidUpdate() {
        this.chat.scrollTop = this.chat.scrollHeight;
        // debugger;
    }

    render() {
        const { comments } = this.props;
        return (
            <div className="chat" ref={ref => (this.chat = ref)}>
                {comments.map(comment => (
                    <div
                        className={`comment-container  ${
                            comment.author === 'me' ? 'me' : 'bot'
                        }`}
                    >
                        <p className={`comment`}>{comment.text}</p>
                    </div>
                ))}
            </div>
        );
    }
}
