function reverseOnlyLetters(s: string): string {

    const reversedLetters: string[] = [];
    let reversedOnlyLetters: string[] = [];
    let counter: number = 0;

    const isLetter = (char) => {
        const code = char.charCodeAt(0);
        return (
            (code >= 65 && code <= 90) || // A-Z
            (code >= 97 && code <= 122)   // a-z
        );
    };

    for (let i = s.length - 1; i >= 0; i--) {
        if (isLetter(s[i])) {
            reversedLetters.push(s[i]);
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (!isLetter(s[i])) {
            reversedOnlyLetters.push(s[i])
        }
        else {
            reversedOnlyLetters.push(reversedLetters[counter])
            counter++
        }
    }

    return reversedOnlyLetters.join("");



};