import ReactDOM from 'react-dom';
import React from 'react';
import RecursivePortal from './components/RecursivePortal';
import El from './components/El';

const App = () => (
    <main>
        <RecursivePortal depth={30} component={El} />
    </main>
);

const run = () => {
    const root = document.getElementById('root');
    ReactDOM.render(<App />, root);
};

run();
