# React Portal Demos

A few demos on how the new portal API can be used with React. Created for [GumGum's techblog](https://techblog.gumgum.com/articles/react-16s-stellar-new-portal-api), also cross posted on [CodePen](https://codepen.io/jscottsmith/post/react-16-s-stellar-new-portal-api)

## Starting a demo

If you don't have parcel you must first install it:

```
yarn global add parcel-bundler
```

Navigate to a demo directory. Install dependencies then run `start`. This will require `parcel` to be install globally on you machine.

```
cd event-bubbling
yarn install
yarn start
```

Then goto `http://localhost:1234/`

## Demos

Explanations for these demos can be found [here](https://codepen.io/jscottsmith/post/react-16-s-stellar-new-portal-api).

### 1. Artboard Context Menu

Artboard that lets you create shapes within a window.
[CodePen Demo](https://codepen.io/jscottsmith/pen/xYaawK)

![Artboard Context Menu](/artboard-context-menu.gif)

### 2. Chat Window

Chat app that lets you type messages with emojis.
[CodePen Demo](https://codepen.io/jscottsmith/pen/rJXwLd)

![Chat Window](/chat-window.gif)

### 3. Window Portal

Messenger app that lets you “save” and share links to messages.
[CodePen Demo](https://codepen.io/jscottsmith/pen/OQepJQ)

![Window Portal](/window-portal.gif)

### 4. Normal Event Bubbling

Example of normal event bubbling.
[CodePen Demo](https://codepen.io/jscottsmith/pen/wyMPqz)

![Normal Event Bubbling](/event-bubbling.gif)

### 5. Portal Event Bubbling

Example of synthetic event bubbling in portals.
[CodePen Demo](https://codepen.io/jscottsmith/pen/PQZaBg)

![Event Bubbling Portals](/event-bubbling-portals.gif)


