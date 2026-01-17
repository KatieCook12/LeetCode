function vowelStrings(words: string[], left: number, right: number): number {

    let count: number = 0;

    for (let i = left; i < right + 1; i++) {

        const first: string = words[i][0]
        const last: string = words[i][words[i].length - 1]

        if (
            first === 'a' || first === 'e' || first === 'i' || first === 'o' || first === 'u'
        ) {
            if (
                last === 'a' || last === 'e' || last === 'i' || last === 'o' || last === 'u'
            ) {
                count++;
            }
        }

    }

    return count;

};