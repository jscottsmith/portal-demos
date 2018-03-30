import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Loading from './Loading';
import Status from './Status';
import { types } from '../constants/status';

const WindowPortal = ({ markup, status, el }) =>
    ReactDOM.createPortal(
        <Fragment>
            {status.type === types.SUCCESS ? (
                // in reality we'd set the location to the new updated url
                // but since this is for demo purposes just pretend this
                // markup is hosted as an HTML doc on a server.
                <div dangerouslySetInnerHTML={{ __html: markup }} />
            ) : status.type === types.UPDATING ? (
                <article className="container">
                    <div className="card">
                        <Status status={status} />
                        <Loading />
                    </div>
                </article>
            ) : (
                <div />
            )}
        </Fragment>,
        el
    );

export default WindowPortal;
