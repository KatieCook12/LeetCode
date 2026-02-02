function findNumbers(nums: number[]): number {

    let count: number = 0;

    for (const n of nums) {
        if (String(n).length % 2 === 0) {
            count++;
        }
    }

    return count;
};