import React from 'react';
import ContextMenu from './ContextMenu';
import Shape from './Shape';

const Window = ({ children, title }) => (
    <section className="window">
        <header>
            <h2>{title}</h2>
            <div className="controls">
                <span className="red" />
                <span className="yellow" />
                <span className="green" />
            </div>
        </header>
        {children}
    </section>
);

export default Window;
