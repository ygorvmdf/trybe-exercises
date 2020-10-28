function palindrome(str) {
    let palindrome = '';
    for (let i = str.length - 1; i >= 0; i--) {
        palindrome += str[i];
    }
    return str === palindrome;
}

module.exports = palindrome;
