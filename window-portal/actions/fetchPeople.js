import { getPeople } from '../api/people';

export async function fetchPeople() {
    console.log('get:people');
    var result = await getPeople();

    return new Promise(resolve => {
        console.log('people:', result);
        resolve(result);
    });
}
