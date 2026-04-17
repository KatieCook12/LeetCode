function isCircularSentence(sentence: string): boolean {

    const sentenceLength: number = sentence.length - 1;
    let currentLetter: string = sentence[0];

    if (currentLetter != sentence[sentenceLength]) {
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