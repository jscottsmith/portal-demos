import React from 'react';
import ReactDOM from 'react-dom';

class RecursivePortal extends React.Component {
    constructor() {
        super();
        this.portalEl = document.body;
    }

    render() {
        const { children, depth, component: El } = this.props;

        const nextDepth = depth - 1;

        if (nextDepth > 0) {
            return ReactDOM.createPortal(
                <El depth={nextDepth}>
                    <RecursivePortal depth={nextDepth} component={El}>
                        {children}
                    </RecursivePortal>
                </El>,
                this.portalEl
            );
        }
        return ReactDOM.createPortal(<El depth={nextDepth} />, this.portalEl);
    }
}

export default RecursivePortal;
