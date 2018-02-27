import ReactDOM from 'react-dom';
import React from 'react';
import Card from './components/Card';
import Reaction from './components/Reaction';

const cards = new Array(10).fill({
    content: 'Lorem Ipsum',
});

const App = () => (
    <main>
        {cards.map((card, i) => (
            <Card>
                <Reaction />
                <p>{card.content}</p>
            </Card>
        ))}
    </main>
);

const run = () => {
    const root = document.getElementById('root');
    ReactDOM.render(<App />, root);
};

run();
