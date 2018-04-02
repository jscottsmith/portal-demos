import React, { Component } from 'react';
import Input from './Input';

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
                <Input label="Title" value={title} onChange={title => this.setState({ title })} />
                <Input
                    label="Your Message"
                    value={message}
                    onChange={message => this.setState({ message })}
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
