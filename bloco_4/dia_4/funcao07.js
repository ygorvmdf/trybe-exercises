function lastWordsVerifyer(wholeWord, endWord) {
    let endWordSize = endWord.length;
    let wholeWordCompare = wholeWord.slice(wholeWord.length - endWordSize, wholeWord.length);
    if (wholeWordCompare == endWord) {
        return true;
    } else {
        return false;
    }
}

console.log(lastWordsVerifyer("Trybe", "ybe"));