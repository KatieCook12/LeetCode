function frequencySort(nums: number[]): number[] {

    const frequency: Record<string, number> = {};

    for (const num of nums) {
        frequency[num] = (frequency[num] ?? 0) + 1;
    }

    const sorted = Object.entries(frequency).sort((a, b) => {
        return a[1] !== b[1] ? a[1] - b[1] : +b[0] - +a[0];
    });

    return sorted.flatMap(([digit, freq]) => Array(freq).fill(+digit));
};