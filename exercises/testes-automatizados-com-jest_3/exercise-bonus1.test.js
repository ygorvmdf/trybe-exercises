const fetch = require('node-fetch');
jest.mock('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
    return fetch(API_URL, { headers: { Accept: 'application/json' } })
        .then(response => response.json())
        .then(data => data.joke);
};

it('should return the joke', async done => {
    const expectedObj = {
      'id': '7h3oGtrOfxc',
      'joke': 'Whiteboards ... are remarkable.',
      'status': 200
    }

    fetch.mockImplementation(() => {
        return Promise.resolve({
            json: () => Promise.resolve(expectedObj),
        });
    });

    const expectData = await fetchJoke();
    expect(expectData).toBe('Whiteboards ... are remarkable.');
    done();
})
