import ReactDOM from 'react-dom';
import React from 'react';
import Window from './components/Window';
import Artboard from './components/Artboard';
import ContextMenu from './components/ContextMenu';

const App = () => (
    <main>
        <Window title="Artboard Window">
            <Artboard />
        </Window>
    </main>
);

const run = () => {
    const root = document.getElementById('root');
    ReactDOM.render(<App />, root);
};

run();
