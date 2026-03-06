function mergeAlternately(word1: string, word2: string): string {

    const mergedStrings: string[] = [];

    let word1Index: number = 0;
    let word2Index: number = 0;

    const wordLengthCombined: number = word1.length + word2.length;

    while (mergedStrings.length < wordLengthCombined) {

        if (word1[word1Index] != undefined) {
            mergedStrings.push(word1[word1Index])
        }

        if (word2[word2Index] != undefined) {
            mergedStrings.push(word2[word2Index])
        }

        word1Index++;
        word2Index++
    }

    return mergedStrings.join("");
};