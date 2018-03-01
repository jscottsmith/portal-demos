import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import Card from './components/Card';
import TextInput from './components/TextInput';
import Chat from './components/Chat';

export class App extends Component {
    state = {
        comments: [
            {
                author: 'bot',
                text: 'Enter some text with an emoji like :joy: or :sad:',
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
    };

    render() {
        return (
            <main>
                <Card>
                    <header ref={ref => (this.header = ref)} />
                    <Chat comments={this.state.comments} />
                    <TextInput
                        handleSubmit={this.handleSubmit}
                        getRef={() => this.header}
                    />
                </Card>
            </main>
        );
    }
}

const run = () => {
    const root = document.getElementById('root');
    ReactDOM.render(<App />, root);
};

run();
