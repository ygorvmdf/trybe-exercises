const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
};

const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
            return resolve(users[id]);
        }

        return reject({ error: 'User with ' + id + ' not found.' });
    });
}

const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
}

it('should find the user', async done => {
    const result = await getUserName(4);
    const result2 = await getUserName(5);
    expect(result).toBe('Mark');
    expect(result2).toBe('Paul');
    done();
})

it('should not find the user', async done => {
  try {
    const result = await getUserName(6);
  } catch (error) {
    expect(error.error).toBe('User with 6 not found.');
  }
  done();
})
