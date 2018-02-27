import React, { Fragment } from 'react';
import ContextMenu from './ContextMenu';
import Shape from './Shape';

function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Artboard extends React.Component {
    constructor() {
        super();
        this.portalEl = document.getElementById('context-menu');
    }

    state = {
        portalActive: false,
        menuOpen: false,
        menuX: 0,
        menuY: 0,
        shapes: this.generateRandomArt(),
    };

    generateRandomArt() {
        const mw = 5000;
        const mh = 5000;
        const types = ['circle', 'square', 'diamond'];
        const shapes = new Array(randomIntBetween(80, 150))
            .fill({})
            .map(shape => ({
                x: randomIntBetween(0, mw),
                y: randomIntBetween(0, mh),
                type: types[randomIntBetween(0, types.length)],
            }));
        return shapes;
    }

    handleClick = event => {
        const { clientX: x, clientY: y } = event;
        const { top, left } = this.artboard.getBoundingClientRect();
        const artX = x - left;
        const artY = y - top;

        this.setState(({ menuOpen }) => ({
            menuOpen: !menuOpen,
            menuX: x,
            menuY: y,
            artX,
            artY,
        }));
    };

    handleCloseMenu = () => {
        this.setState(() => ({
            menuOpen: false,
        }));
    };

    handleTogglePortal = () => {
        this.setState(({ portalActive }) => ({
            portalActive: !portalActive,
        }));
    };

    handleAddObject = newShape => {
        const shapes = [...this.state.shapes, newShape];
        this.setState(() => ({ shapes }));
    };

    render() {
        const { children } = this.props;
        const {
            portalActive,
            menuOpen,
            menuX,
            menuY,
            artX,
            artY,
            shapes,
            event,
        } = this.state;

        return (
            <Fragment>
                <div className="scroll" onClick={this.handleClick}>
                    <div
                        className="artboard"
                        ref={ref => (this.artboard = ref)}
                    >
                        {shapes.map((config, i) => (
                            <Shape key={i} {...config} />
                        ))}
                    </div>
                </div>

                {/*
                    This is our context menu that should behave as though
                    it's a global menu item, even though we are rendering
                    within the confines of the <Window>
                */}
                {menuOpen && (
                    <ContextMenu
                        menuX={menuX}
                        menuY={menuY}
                        artX={artX}
                        artY={artY}
                        portalEl={portalActive ? this.portalEl : null}
                        addShape={this.handleAddObject}
                        closeMenu={this.handleCloseMenu}
                    />
                )}

                {/*
                    This button and state only exists to toggle the
                    portal on/off for illustrative purposes.
                */}
                <button
                    className="portal-toggle"
                    onClick={this.handleTogglePortal}
                >
                    {portalActive ? 'Disable Portal' : 'Activate Portal'}
                </button>
            </Fragment>
        );
    }
}

export default Artboard;
