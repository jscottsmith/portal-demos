import React, { Component } from 'react';

export default class Chat extends Component {
    componentDidUpdate() {
        this.chat.scrollTop = this.chat.scrollHeight;
    }

    render() {
        const { comments } = this.props;
        return (
            <div className="chat" ref={ref => (this.chat = ref)}>
                {comments.map(({ author, text }, i) => {
                    const isMe = author === 'me';

                    return (
                        <div
                            key={`comment-${i}`}
                            className={`comment ${isMe ? 'me' : 'bot'}`}
                        >
                            <span className="avatar">{isMe ? '😎' : '🤖'}</span>
                            <p className={`bubble`}>{text}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}
