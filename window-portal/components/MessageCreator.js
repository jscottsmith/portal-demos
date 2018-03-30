import React, { Component } from 'react';

class MessageCreator extends Component {
    state = {
        title: '',
        message: '',
    };

    render() {
        const { message, title } = this.state;
        const { handleSave } = this.props;
        return (
            <div className="input-container">
                <label>Title</label>
                <input
                    onChange={({ currentTarget: { value: title } }) =>
                        this.setState({
                            title,
                        })
                    }
                    value={title}
                />
                <label>Your Message</label>
                <input
                    onChange={({ currentTarget: { value: message } }) =>
                        this.setState({
                            message,
                        })
                    }
                    value={message}
                />
                <button
                    className="btn"
                    onClick={() => {
                        handleSave({ title, message });
                        this.setState({
                            title: '',
                            message: '',
                        });
                    }}>
                    Save Message
                </button>
            </div>
        );
    }
}
export default MessageCreator;
