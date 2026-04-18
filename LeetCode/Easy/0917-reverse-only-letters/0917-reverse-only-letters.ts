function reverseOnlyLetters(s: string): string {

    const reversedLetters: string[] = [];
    const reversedOnlyLetters: string[] = [];
    let index = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const code = s[i].charCodeAt(0);
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            reversedLetters.push(s[i]);
        }
    }

    for (let i = 0; i < s.length; i++) {
        const code = s[i].charCodeAt(0);
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            reversedOnlyLetters.push(reversedLetters[index]);
            index++;
        } else {
            reversedOnlyLetters.push(s[i]);
        }
    }

    return reversedOnlyLetters.join("");

}