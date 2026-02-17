function uniqueMorseRepresentations(words: string[]): number {

    const morseCode: string[] = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

    const wordsConvertedToCodeSet = new Set();

    for (const word of words) {

        let morseCodeOfWord: string[] = [];

        for (const ch of word) {
            morseCodeOfWord.push(morseCode.at(ch.charCodeAt(0) - 97))
        }

        wordsConvertedToCodeSet.add(morseCodeOfWord.join(""))
        morseCodeOfWord = [];

    }

    return wordsConvertedToCodeSet.size

};