function frequencySort(nums: number[]): number[] {

    const frequency: Record<string, number> = {};
    const sortedArray: number[] = [];

    for (const num of nums) {
        frequency[num] = (frequency[num] ?? 0) + 1;
    }

    const sorted = Object.entries(frequency).sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        }
        return Number(b[0]) - Number(a[0]);
    });


    const finalArray = sorted.flatMap(([digit, freq]) =>
        Array(freq).fill(Number(digit))
    );

    return finalArray;

};