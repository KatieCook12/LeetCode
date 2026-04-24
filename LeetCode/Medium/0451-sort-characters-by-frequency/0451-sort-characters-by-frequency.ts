function frequencySort(s: string): string {

    let frequencyCount: Record<string, number> = {};

    for (const ch of s) {
        frequencyCount[ch] = (frequencyCount[ch] ?? 0) + 1;
    }

    const sorted = Object.entries(frequencyCount).sort((a, b) => {
        if (b[1] !== a[1]) {
            return b[1] - a[1];
        }
        return a[0].charCodeAt(0) - b[0].charCodeAt(0);
    });

    let result: string = "";

    for (const [char, freq] of sorted) {
        result += char.repeat(freq);
    }

    return result;
};