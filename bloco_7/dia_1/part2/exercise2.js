const longestWord = string => {
    const stringToArray = string.split(/\s|,/);
    let biggestLength = 0;
    for (word of stringToArray) {
        if (word.length > biggestLength) {
            const biggestWord = word;
            biggestLength = word.length;
        }
    }
    return word;
}
