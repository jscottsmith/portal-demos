import React from 'react';

const WindowPortal = ({ markup, message }) => (
    <div>{markup ? <div dangerouslySetInnerHTML={{ __html: markup }} /> : <p>{message}</p>}</div>
);

export default WindowPortal;
