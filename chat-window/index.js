import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import Card from './components/Card';
import TextInput from './components/TextInput';
import Chat from './components/Chat';
import responses from './data/responses';

export class App extends Component {
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
        const comments = [
            ...this.state.comments,
            {
                author: 'me',
                text,
            },
        ];
        this.setState({ comments });
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
        const comments = [
            ...this.state.comments,
            {
                author: 'bot',
                text: response,
            },
        ];
        this.setState({ comments });
    };

    render() {
        return (
            <main>
                <article className="card">
                    {/* this will be our portal element */}
                    <header ref={ref => (this.header = ref)} />
                    <Chat comments={this.state.comments} />
                    <TextInput
                        handleSubmit={this.handleSubmit}
                        // this will allow us to retrieve the ref for creating the portal
                        getRef={() => this.header}
                    />
                </article>
            </main>
        );
    }
}

const run = () => {
    const root = document.getElementById('root');
    ReactDOM.render(<App />, root);
};

run();
