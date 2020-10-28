function vowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let letter of str) {
        if (vowels.includes(letter.toLowerCase())) {
            count++;
        }
    }
    return count;
}

module.exports = vowels;