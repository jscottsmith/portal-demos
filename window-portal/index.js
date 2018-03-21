import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import Message from './components/Message';

const App = () => (
    <main>
        <Message />
    </main>
);

const run = () => {
    const root = document.getElementById('root');
    ReactDOM.render(<App />, root);
};

run();
