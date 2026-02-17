function uniqueMorseRepresentations(words: string[]): number {

    const morseCode: string[] = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

    const wordsConvertedToCode: string[] = [];

    for (const word of words) {

        let morseCodeOfWord: string[] = [];

        for (const ch of word) {
            morseCodeOfWord.push(morseCode.at(ch.charCodeAt(0) - 97))
        }

        wordsConvertedToCode.push(morseCodeOfWord.join(""))
        morseCodeOfWord = [];

    }

    return new Set(wordsConvertedToCode).size

};