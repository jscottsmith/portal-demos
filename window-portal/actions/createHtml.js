export async function createHtml(message) {
    const markup = await uploadMarkup(message);

    return new Promise((resolve, reject) => {
        resolve(markup);
    });
}

// Fake API call that "uploads" markup to a server.
// Really it just returns the markup here for us to use.

function uploadMarkup(message) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                `<!DOCTYPE html>\n<html>${createStyles()}\n<head>\n<title>Message</title>\n</head>\n<body>\n<h1>Message</h1>\n<p>${message}</p>\n</body>\n</html>`
            );
        }, 2000);
    });
}

function createStyles() {
    return `<style>
        html,
        body {
            min-height: 100%;
        }

        * {
            box-sizing: border-box;
        }

        h1 {
            font-weight: 100;
        }

        body {
            position: relative;
            color: #222;
            background-image: linear-gradient(90deg, #fbff8c 0%, #ffeb8c 100%);
            text-align: center;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }
    </style>`;
}
