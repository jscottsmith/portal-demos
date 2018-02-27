import React from 'react';
import ReactDOM from 'react-dom';

const ContextMenu = ({
    addShape,
    closeMenu,
    portalEl,
    menuX,
    menuY,
    artX,
    artY,
}) => {
    const menu = (
        <nav
            className="context-menu"
            style={{
                top: menuY,
                left: menuX,
            }}
        >
            <ul>
                <li
                    className="menu-item"
                    onClick={event => {
                        addShape({ x: artX, y: artY, type: 'square' });
                        closeMenu();
                    }}
                >
                    Add Shape: Square
                </li>
                <li
                    className="menu-item"
                    onClick={event => {
                        addShape({ x: artX, y: artY, type: 'circle' });
                        closeMenu();
                    }}
                >
                    Add Shape: Circle
                </li>
                <li
                    className="menu-item"
                    onClick={event => {
                        addShape({ x: artX, y: artY, type: 'diamond' });
                        closeMenu();
                    }}
                >
                    Add Shape: Diamond
                </li>
                {/*
                    Fake items to make the menu bigger and more likely to not fit in the window
                */}
                <hr />
                <li>Fake Menu Item: Foo</li>
                <li>Fake Menu Item: Bar</li>
                <hr />
                <li>Fake Menu Item: Bat</li>
                <li>Fake Menu Item: Bin</li>
                <li>Fake Menu Item: Foe</li>
                <hr />
                <li>Fake Menu Item: Fat</li>
                <li>Fake Menu Item: Bot</li>
            </ul>
        </nav>
    );

    // if the portal el is available render into it.
    // This is just for demo purposes to toggle between states.

    return portalEl ? ReactDOM.createPortal(menu, portalEl) : menu;
};

export default ContextMenu;
