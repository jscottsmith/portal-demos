export async function createHtml(message) {
    const markup = await uploadMarkup(message);

    return new Promise((resolve, reject) => {
        resolve(markup);
    });
}

function isValidMessage(message) {
    if (message.length <= 3) {
        return new Error('Invalid message: Too short! Must be longer than 3 characters.');
    } else if (message.length > 100) {
        return new Error('Invalid message: Keep it short! Must be less than 100 characters.');
    }
}

// Fake API call that "uploads" markup to a server.
// Really it just returns the markup here for us to use.

function uploadMarkup(message) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                `<!DOCTYPE html>\n<html>\n<head>\n<title>Message</title>\n</head>\n<body>\n<h1>Message</h1>\n<p>${message}</p>\n</body>\n</html>`
            );
        }, 2000);
    });
}
