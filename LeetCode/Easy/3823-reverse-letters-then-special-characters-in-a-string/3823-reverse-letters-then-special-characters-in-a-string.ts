function reverseByType(s: string): string {

    const reverseByType: string[] = [];
    const reversedLetter: string[] = [];
    const reversedCharacters: string[] = [];
    const sLength: number = s.length - 1;
    let reverseByLetterIndex: number = 0;
    let reverseByCharacterIndex: number = 0;

    function isLetter(ch: string): boolean {
        const code = ch.charCodeAt(0);
        return code >= 97 && code <= 122;
    }

    for (let i = sLength; i >= 0; i--) {
        isLetter(s[i]) ? reversedLetter.push(s[i]) : reversedCharacters.push(s[i]);
    }

    for (let i = 0; i <= sLength; i++) {
        reverseByType.push(
            isLetter(s[i])
                ? reversedLetter[reverseByLetterIndex++]
                : reversedCharacters[reverseByCharacterIndex++]
        );
    }

    return reverseByType.join("");
};

