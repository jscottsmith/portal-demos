import React, { Fragment } from 'react';

const Input = ({ tag: Tag = 'input', label, value, onChange, ...rest }) => (
    <Fragment>
        <label>{label}</label>
        <Tag
            onChange={({ currentTarget: { value } }) => {
                onChange(value);
            }}
            value={value || ''}
            {...rest}
        />
    </Fragment>
);

export default Input;
