export function getPeople() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    id: 0,
                    name: 'John',
                },
                {
                    id: 1,
                    name: 'Jack',
                },
            ]);
        }, 2000);
    });
}
