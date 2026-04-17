function isCircularSentence(sentence: string): boolean {

    const sentenceLength: number = sentence.length;
    let currentLetter: string = sentence[0];

    if (currentLetter != sentence[sentence.length - 1]) {
        return false;
    }

    for (let i = 0; i < sentenceLength; i++) {
        if (sentence[i] == " ") {
            currentLetter = sentence[i - 1];
            console.log(sentence[i - 1])
        }
        if (sentence[i] == " " && sentence[i + 1] != " ") {
            if (sentence[i + 1] != currentLetter) {

                return false;
            }
        }
    }

    return true;
};