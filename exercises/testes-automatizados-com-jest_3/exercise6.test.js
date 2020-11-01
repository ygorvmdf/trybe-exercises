const fetch = require('node-fetch');
jest.mock('node-fetch');

const fetchDogPictures = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const jsonResponse = await response.json();
        return jsonResponse.message;
    } catch (error) {
        throw error;
    }
}

afterEach(() => {
    fetch.mockRestore();
})

test('in case of success', async done => {
    const expectedObj = {
        message: 'dog picture',
        status: 'success'
    };

    fetch.mockImplementation(() => {
        return Promise.resolve({
            json: () => Promise.resolve(expectedObj)
        });
    });
    const expectResponse = await fetchDogPictures();
    expect(expectResponse).toEqual('dog picture');
    done();
});

test('in case of failure', async done => {
    fetch.mockImplementation(() => {
        throw 'request failed';
    });
    try {
      await fetchDogPictures();
    } catch (error) {
        expect(error).toBe('request failed');
    }
    done();
});
