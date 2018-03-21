import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createHtml } from '../actions/createHtml';
import WindowPortal from './WindowPortal';

export default class OpenPortal extends Component {
    state = {
        isPortalOpen: false,
        message: null,
        value: '',
    };

    handleSubmit = () => {
        this.setState({
            message: 'Creating your custom message. This will update once complete.',
            isPortalOpen: true,
        });

        // this will also be conditional
        this.handleOpenPortal();

        // Fake async action that returns some markup once it's been "uploaded"
        // What this is really meant to simulate is an action that uploads some
        // markup to a webserver then return the URL of that document.

        createHtml(this.state.value)
            .then(markup => {
                // Can't do this because it will be blocked by a pop-up blocker.
                // event context is lost in the async createHtml action, thus won't
                // be a "trusted" user initiated event. We should open the portal first.

                // this will be enabled by state to simulate what happens with the pop-up blocker
                // this.handleOpenPortal(markup);

                this.setState({ markup });
            })
            .catch(error => {
                // this should demonstrate an error rendered into the portal.
                this.setState({
                    message: error.message,
                });
            });
    };

    handleOpenPortal = () => {
        // this is to demonstrate if called after the async function it won't open.
        // catch to display the error to the user.
        try {
            this.portalWindow = window.open('', 'WINDOW_PORTAL');
            const { document: portalDoc } = this.portalWindow.window;

            // Portal element we will render into
            this.portalEl = portalDoc.createElement('div');
            this.portalEl.id = 'root';
            portalDoc.body.appendChild(this.portalEl);
        } catch (error) {
            this.setState({ message: error.message });
        }
    };

    render() {
        const { isPortalOpen, message, markup, value } = this.state;
        return (
            <article className="container">
                <h1>Portal Window</h1>
                <div className="form">
                    <p>Type your message below then submit it to </p>
                    <div>
                        <label>Message</label>
                        <input
                            onChange={({ currentTarget }) =>
                                this.setState({
                                    value: currentTarget.value,
                                })
                            }
                            value={value}
                        />
                        <button onClick={this.handleSubmit}>Submit</button>
                    </div>
                    {message && <p>Oh no. {message}</p>}
                </div>

                {isPortalOpen &&
                    ReactDOM.createPortal(
                        <WindowPortal markup={markup} message={message} />,
                        this.portalEl
                    )}
            </article>
        );
    }
}
