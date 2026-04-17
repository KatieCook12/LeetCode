function isCircularSentence(sentence: string): boolean {

    const sentenceLength: number = sentence.length;
    let currentLetter: string = sentence[0];

    if (currentLetter != sentence[sentence.length - 1]) {
        return false;
    }

    for (let i = 0; i < sentenceLength; i++) {

        const firstCharacter: string = sentence[i + 1];

        if (sentence[i] == " ") {
            currentLetter = sentence[i - 1];
        }
        if (sentence[i] == " " && firstCharacter != " " && firstCharacter != currentLetter) {
            return false;
        }
        
    }

    return true;
};