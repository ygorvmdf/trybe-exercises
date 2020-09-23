function isPalindrome(word) {
    let reverseWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    if (reverseWord == word) {
        return true;
    } else {
        return false;
    }
}

isPalindrome("ovo")