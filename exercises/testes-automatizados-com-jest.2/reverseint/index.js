function reverseInt(n) {
    const numberToString = String(Math.abs(n));
    let reverseString = '';
    for ( let index = numberToString.length - 1; index >= 0; index-- ) {
        reverseString += numberToString[index];
    }
    if (n < 0) return -Number(reverseString);
    return Number(reverseString);
}

module.exports = reverseInt;
