import React, { Component } from 'react';

export default class Shape extends Component {
    render() {
        const { x, y, type } = this.props;
        return <div className={`shape ${type}`} style={{ top: y, left: x }} />;
    }
}
