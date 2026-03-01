function cellsInRange(s: string): string[] {

    const cellsInRangeArray: string[] = [];

    for (let i = s[0].charCodeAt(0); i <= s[3].charCodeAt(0); i++) {

        for (let x = +s[1]; x <= +s[4]; x++) {
            cellsInRangeArray.push(String.fromCharCode(i) + x);
        }

    }

    return cellsInRangeArray;

};