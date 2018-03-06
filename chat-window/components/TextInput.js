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
        // capture potential emoji shortcodes
        this.emojiAutoComplete = new RegExp(/(:\b)\w+$/);
        // capture all potential completed emoji shortcodes
        this.emojiTest = new RegExp(/\:(.*?)\:/g);
    }

    handleChange = event => {
        let { value } = event.currentTarget;

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
            this.handleSubmit();
        }
    };

    handleSubmit() {
        const value = this.replaceEmojiShortcodes(this.state.value);
        this.props.handleSubmit(value);
        this.setState({
            value: '',
            emojis: [],
            potentialShortname: null,
        });
    }

    replaceEmojiShortcodes(value) {
        // test for potential emoji shortnames
        if (this.emojiTest.test(value)) {
            // filter down to only emoji shortname matches
            const matches = value
                .match(this.emojiTest)
                .map(val => {
                    // filter to only emoji matches
                    const emoji = emojis.filter(
                        emoji => emoji.shortname === val
                    );

                    // return the emoji obj
                    return emoji[0];
                })
                .filter(v => v); // filter out undefined

            // reduce value to replace emoji shortnames with emoji char
            if (matches.length) {
                value = matches.reduce((acc, cur) => {
                    return acc.replace(cur.shortname, cur.emoji);
                }, value);
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
