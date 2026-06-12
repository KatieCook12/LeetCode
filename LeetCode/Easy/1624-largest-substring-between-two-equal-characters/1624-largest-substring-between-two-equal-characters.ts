function maxLengthBetweenEqualCharacters(s: string): number {

    const count: Record<string, number> = {};
    const sLength: number = s.length;
    let maxDistance: number = -1;

    for (let i = 0; i < sLength; i++) {
        const ch: string = s[i];
        if (count[ch] === undefined) {
            count[ch] = i;
        } else {
            const difference = i - count[ch] - 1;
            if (difference > maxDistance) {
                maxDistance = difference;
            }
        }
    }

    return maxDistance;
};