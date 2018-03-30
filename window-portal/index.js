import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import Messenger from './components/Messenger';

const App = () => (
    <main>
        <Messenger />
    </main>
);

const run = () => {
    const root = document.getElementById('root');
    ReactDOM.render(<App />, root);
};

run();
