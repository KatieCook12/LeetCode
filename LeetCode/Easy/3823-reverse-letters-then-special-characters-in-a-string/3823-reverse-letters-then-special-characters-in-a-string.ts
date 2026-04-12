function reverseByType(s: string): string {

    const reverseByType: string[] = [];
    const reversedLetter: string[] = [];
    const reversedCharacters: string[] = [];
    const sLength: number = s.length - 1;
    let reverseByLetterIndex: number = 0;
    let reverseByCharacterIndex: number = 0;


    for (let i = sLength; i >= 0; i--) {

        const charCode: number = s[i].charCodeAt(0);
        if (charCode >= 97 && charCode <= 122 || charCode >= 65 && charCode <= 90) {
            reversedLetter.push(s[i])
        }
        else {
            reversedCharacters.push(s[i])
        }
    }

    for (let i = 0; i <= sLength; i++) {
        const charCode: number = s[i].charCodeAt(0);

        if (charCode >= 97 && charCode <= 122 || charCode >= 65 && charCode <= 90) {
            reverseByType.push(reversedLetter[reverseByLetterIndex])
            reverseByLetterIndex++;
        }
        else {
            reverseByType.push(reversedCharacters[reverseByCharacterIndex])
            reverseByCharacterIndex++;
        }
    }

    return reverseByType.join("");
};

