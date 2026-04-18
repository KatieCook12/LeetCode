function reverseOnlyLetters(s: string): string {

    const reversedOnlyLetters: string[] = [];
    let index: number = 0;
    const sLength: number = s.length;

    const reversedLetters = s.replace(/[^a-zA-Z]/g, "").split("").reverse();

    for (let i = 0; i < sLength; i++) {
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