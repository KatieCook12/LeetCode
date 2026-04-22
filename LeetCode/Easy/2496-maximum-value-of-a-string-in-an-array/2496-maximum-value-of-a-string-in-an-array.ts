function maximumValue(strs: string[]): number {

    let currentMaximumValue: number = 0;

    function lengthChecker(word: string): void {
        const wordLength: number = word.length;
        if (wordLength > currentMaximumValue) {
            currentMaximumValue = wordLength;
        }
    }

    for (const str of strs) {
        if (str.match(/\d/g) && str.match(/[a-z]/g)) {
            lengthChecker(str);
        }
        else if (str.match(/\d/g) && !str.match(/[a-z]/g)) {
            if (+str > currentMaximumValue) {
                currentMaximumValue = +str;
            }
        }
        else {
            lengthChecker(str);
        }
    }

    return currentMaximumValue;
};