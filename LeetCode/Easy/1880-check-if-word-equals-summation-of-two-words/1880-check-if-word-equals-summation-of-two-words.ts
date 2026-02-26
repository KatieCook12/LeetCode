function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {

    let firstWordNumber: number[] = [];
    let secondWordNumber: number[] = [];
    let thirdWordNumber: number[] = [];

    for (const ch of firstWord) {
        firstWordNumber.push(ch.charCodeAt(0) - 97)
    }

    for (const ch of secondWord) {
        secondWordNumber.push(ch.charCodeAt(0) - 97)
    }

    for (const ch of targetWord) {
        thirdWordNumber.push(ch.charCodeAt(0) - 97)
    }

    return +firstWordNumber.join("") + +secondWordNumber.join("") == +thirdWordNumber.join("") ? true : false;

};