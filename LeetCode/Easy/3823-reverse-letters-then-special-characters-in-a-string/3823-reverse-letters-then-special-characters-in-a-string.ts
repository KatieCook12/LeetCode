function reverseByType(s: string): string {
    const result = new Array<string>(s.length);
    const reversedLetters: string[] = [];
    const reversedSpecials: string[] = [];
    const sLength: number = s.length;

    let li: number = 0;
    let si: number = 0;

    function isLetter(ch: string): boolean {
        const code: number = ch.charCodeAt(0);
        return code >= 97 && code <= 122;
    }

    for (let i = sLength - 1; i >= 0; i--) {
        if (isLetter(s[i])) {
            reversedLetters.push(s[i]);
        } else {
            reversedSpecials.push(s[i]);
        }
    }

    for (let i = 0; i < sLength; i++) {
        result[i] = isLetter(s[i])
            ? reversedLetters[li++]
            : reversedSpecials[si++];
    }

    return result.join("");
}