function mostFrequentEven(nums: number[]): number {

    let count: Record<string, number> = {};

    for (const num of nums) {
        if (num % 2 === 0) {
            count[num] = (count[num] ?? 0) + 1
        }
    }

    if (Object.keys(count).length === 0) {
        return -1;
    } else {
        const sorted = Object.entries(count).sort((a, b) => {
            if (b[1] !== a[1]) {
                return b[1] - a[1];
            }
            return Number(a[0]) - Number(b[0]);
        });

        return Number(sorted[0][0]);
    }
};