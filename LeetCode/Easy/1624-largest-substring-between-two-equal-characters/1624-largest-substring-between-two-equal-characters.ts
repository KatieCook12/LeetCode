function maxLengthBetweenEqualCharacters(s: string): number {

    const count: Record<string, { indexOne: number; indexTwo: number }> = {};
    let maxDistance: number = -1;

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (!count[ch]) {
            count[ch] = { indexOne: i, indexTwo: i };
        } else {
            count[ch].indexTwo = i;
        }
    }

    Object.values(count).forEach(value => {
        const difference: number = value.indexTwo - value.indexOne - 1;
        if (difference > maxDistance && difference != -1) {
            maxDistance = difference;
        }
    });

    return maxDistance;
};