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

it('should find the user', () => {
    return getUserName(4).then(result => {
        expect(result).toBe('Mark');
    })
})

it('should not find the user', () => {
    return getUserName(6).catch(error => {
        expect(error.error).toBe("User with 6 not found.")
    })
})
