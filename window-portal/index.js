import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import OpenPortal from './components/OpenPortal';

const App = () => (
    <main>
        <OpenPortal />
    </main>
);

const run = () => {
    const root = document.getElementById('root');
    ReactDOM.render(<App />, root);
};

run();
