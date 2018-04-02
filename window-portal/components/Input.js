import React, { Fragment } from 'react';

const Input = ({ label, value, onChange }) => (
    <Fragment>
        <label>{label}</label>
        <input
            onChange={({ currentTarget: { value } }) => {
                onChange(value);
            }}
            value={value}
        />
    </Fragment>
);

export default Input;
