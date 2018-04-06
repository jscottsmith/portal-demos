import React, { Component, Fragment } from 'react';
import Input from './Input';

class MessageCreator extends Component {
    state = {
        name: null,
        message: null,
    };

    render() {
        const { message, name } = this.state;
        const { handleSave } = this.props;
        return (
            <Fragment>
                <Input
                    label="Your Name"
                    value={name}
                    placeholder="Anonymous"
                    onChange={name =>
                        this.setState({
                            name,
                        })
                    }
                />
                <Input
                    label="Your Message"
                    value={message}
                    placeholder="Lorem ipsum"
                    onChange={message => this.setState({ message })}
                    tag="textarea"
                />
                <button
                    className="btn"
                    onClick={() => {
                        handleSave({ name, message });
                        this.setState({ name: null, message: null });
                    }}>
                    Save Message
                </button>
            </Fragment>
        );
    }
}

export default MessageCreator;
