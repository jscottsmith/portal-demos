import React from 'react';

const Recursive = ({ children, depth, component: El }) => {
    const nextDepth = depth - 1;
    if (nextDepth > 0) {
        return (
            <El depth={nextDepth}>
                <Recursive depth={nextDepth} component={El}>
                    {children}
                </Recursive>
            </El>
        );
    }
    return <El depth={nextDepth} />;
};

export default Recursive;
