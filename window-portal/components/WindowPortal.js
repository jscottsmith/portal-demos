import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const WindowPortal = ({ children, el }) => ReactDOM.createPortal(children, el);

export default WindowPortal;
