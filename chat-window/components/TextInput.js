import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EmojiMenu from './EmojiMenu';
import InsertEmoji from './InsertEmoji';
import emojis from '../data/emojis';

export default class TextInput extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            emojis: [],
        };
        // capture and words after the : at the end
        this.regex = new RegExp(/(:\b)\w+$/);
    }

    handleChange = event => {
        const { value } = event.currentTarget;

        if (this.regex.test(value)) {
            // create regex based on expected shortname value
            const searchName = value.split(':').slice(-1)[0];
            const regex = new RegExp(`(${searchName})`);

            // filter emojis by shortnames
            const matchingEmojis = emojis.filter(({ shortname }) =>
                regex.test(shortname)
            );

            this.setState({
                emojis: matchingEmojis,
                value,
                searchName,
            });
        } else {
            this.setState({
                emojis: [],
                value,
            });
        }
    };

    handleSelect = emoji => {
        const { value, searchName } = this.state;
        const nextValue = value.split(`:${searchName}`).join(emoji);
        this.setState({
            value: nextValue,
            emojis: [],
            searchName: null,
        });
        this.textarea.focus();
    };

    handleKeyDown = event => {
        const { keyCode } = event;
        if (keyCode === 9) {
            event.preventDefault();
            this.handleSelect(this.state.emojis[0].emoji);
        }
        if (keyCode === 13) {
            event.preventDefault();
            this.handleSubmit();
        }
    };

    handleSubmit() {
        this.props.handleSubmit(this.state.value);
        this.setState({
            value: '',
            emojis: [],
            searchName: null,
        });
    }

    render() {
        const { value, emojis } = this.state;
        const { getRef } = this.props;
        const showEmoji = emojis.length > 0;
        return (
            <div className="text-input">
                <textarea
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handleChange}
                    value={value}
                    ref={ref => (this.textarea = ref)}
                />
                {/*showEmoji && (
                    <InsertEmoji
                        handleSelect={this.handleSelect}
                        emoji={emojis[0]}
                    />
                )*/}
                {showEmoji &&
                    ReactDOM.createPortal(
                        <EmojiMenu
                            handleSelect={this.handleSelect}
                            emojis={emojis}
                        />,
                        getRef()
                    )}
            </div>
        );
    }
}
