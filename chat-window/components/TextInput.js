import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EmojiMenu from './EmojiMenu';
import emojis from '../data/emojis';

class TextInput extends React.Component {
    state = {
        value: '',
        emojis: [],
        potentialShortname: null,
    };

    // capture potential emoji shortcodes for autocomplete
    emojiAutoComplete = new RegExp(/(:\b)\w+$/);

    // capture all potential completed emoji shortcodes
    emojiCompleteTest = new RegExp(/\:(.*?)\:/g);

    handleChange = event => {
        const { value } = event.currentTarget;

        if (this.emojiAutoComplete.test(value)) {
            // create regex based on expected shortname value
            const potentialShortname = value.split(':').slice(-1)[0];
            const regex = new RegExp(`^:${potentialShortname}`);

            // filter emojis by shortnames
            const matchingEmojis = emojis.filter(({ shortname }) =>
                regex.test(shortname)
            );

            this.setState({
                emojis: matchingEmojis,
                value,
                potentialShortname,
            });
        } else {
            this.setState({
                emojis: [],
                value,
            });
        }
    };

    handleSelect = emoji => {
        const { value, potentialShortname } = this.state;
        const nextValue = value.split(`:${potentialShortname}`).join(emoji);
        this.setState({
            value: nextValue,
            emojis: [],
            potentialShortname: null,
        });
        this.textarea.focus();
    };

    handleKeyDown = event => {
        const { emojis, value } = this.state;

        // select an emoji on tab
        const { keyCode } = event;
        if (keyCode === 9 && emojis[0]) {
            event.preventDefault();
            this.handleSelect(this.state.emojis[0].emoji);
        }

        // submit message on enter
        const trimVal = value.replace('\n', '').trim();
        if (keyCode === 13 && trimVal) {
            event.preventDefault();
            this.submitMessage();
        }
    };

    submitMessage() {
        const value = this.replaceEmojiShortcodes(this.state.value);
        this.props.handleSubmit(value);
        // clear out state
        this.setState({
            value: '',
            emojis: [],
            potentialShortname: null,
        });
    }

    replaceEmojiShortcodes(value) {
        // test for potential emoji shortnames
        if (this.emojiCompleteTest.test(value)) {
            // there may be a more concise approach here but i'm just gettin it done.
            const matches = value
                .match(this.emojiCompleteTest) // get all the potential matches
                .map(val => emojis.filter(emoji => emoji.shortname === val)[0]) // return the emoji obj
                .filter(v => v); // filter out undefined

            // reduce value to replace emoji shortnames with emoji char
            if (matches.length) {
                value = matches.reduce(
                    (acc, cur) => acc.replace(cur.shortname, cur.emoji),
                    value
                );
            }
        }
        return value;
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

export default TextInput;
