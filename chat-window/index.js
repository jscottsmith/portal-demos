import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import TextInput from './components/TextInput';
import Chat from './components/Chat';

import responses from './data/responses';

class App extends React.Component {
    state = {
        comments: [
            {
                author: 'bot',
                text:
                    'Hello 👋, enter text with an emoji like :joy: or :smile:',
            },
        ],
    };

    handleSubmit = text => {
        this.addComment('me', text);
        this.startBotResponse();
    };

    startBotResponse() {
        if (this.botResponse) {
            clearTimeout(this.botResponse);
        }

        this.botResponse = setTimeout(
            this.fakeResponse,
            Math.random() * 2000 + 500
        );
    }

    fakeResponse = () => {
        const i = Math.floor(Math.random() * (responses.length - 1));
        const response = responses[i];
        this.addComment('bot', response);
    };

    addComment(author, text) {
        const comments = [
            ...this.state.comments,
            {
                author,
                text,
            },
        ];
        this.setState({ comments });
    }

    render() {
        return (
            <main>
                <section className="chat-window">
                    {/* this will be our portal element */}
                    <header ref={ref => (this.header = ref)} />

                    {/* the message window */}
                    <Chat comments={this.state.comments} />

                    {/* the meat of this app is within the TextInput */}
                    <TextInput
                        handleSubmit={this.handleSubmit}
                        getRef={() => this.header} // this will allow us to retrieve the ref for creating the portal
                    />
                </section>
            </main>
        );
    }
}

const run = () => {
    const root = document.getElementById('root');
    ReactDOM.render(<App />, root);
};

run();
