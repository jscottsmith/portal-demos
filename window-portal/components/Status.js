import React from 'react';
import Loading from './Loading';
import { types, messages } from '../constants/status';

const Status = ({ status: { message, type } }) => <p className={`status ${type}`}>{message}</p>;

export default Status;
