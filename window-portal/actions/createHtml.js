export async function createHtml(message) {
    const markup = await uploadMarkup(message);

    return new Promise((resolve, reject) => {
        resolve(markup);
    });
}

// Fake API call that "uploads" markup to a server.
// Really it just returns the markup here for us to use.

function uploadMarkup({ name, message }) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`<!DOCTYPE html>
                <html>
                <head>
                <title>${name}</title>
                ${createStyles()}
                </head>
                <body>
                    <h1>${name} says:</h1>
                    <p>${message}</p>
                </body>
                </html>`);
        }, 2000);
    });
}

function createStyles() {
    return `<style>
        html,
        body {
            height: 100%;
        }

        * {
            box-sizing: border-box;
        }

        h1 {
            width: 100%;
            font-weight: 100;
        }

        p {
            width: 100%;
            margin: 0;
            line-height: 1;
            font-size: 4vw;
            font-weight: 700;
            color: #222;
        }

        p:after,
        p:before {
            color: #222;
        }

        p:before {
            content: '“';
            margin-right: 0.2em;
        }

        p:after {
            content: '”';
            margin-left: 0.2em;
        }

        body {
            height: 100%;            
            position: relative;
            color: #222;
            background-image: linear-gradient(90deg, #fbff8c 0%, #ffeb8c 100%);
            text-align: center;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            display: flex;
            align-items: center;
            align-content: center;
            flex-flow: row wrap;
        }
    </style>`;
}
