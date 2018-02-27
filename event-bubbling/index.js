import ReactDOM from 'react-dom';
import React from 'react';
import Recursive from './components/Recursive';
import El from './components/El';

const App = () => (
    <main>
        <Recursive depth={30} component={El} />
    </main>
);

const run = () => {
    const root = document.getElementById('root');
    ReactDOM.render(<App />, root);
};

run();
