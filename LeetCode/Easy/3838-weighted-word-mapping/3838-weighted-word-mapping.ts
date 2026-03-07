function mapWordWeights(words: string[], weights: number[]): string {

    let result: string = "";

    for (const word of words) {
        let sum: number = 0;
        for (const ch of word) {
            sum += weights[ch.charCodeAt(0) - 97];
        }
        result += String.fromCharCode(26 - (sum % 26) + 96);
    }

    return result;
};