function findNumbers(nums: number[]): number {

    let count: number = 0;

    for (const n of nums) {

        const length: number = Math.ceil(Math.log10(n + 1))

        if (length % 2 === 0) {
            count++;
        }

    }

    return count;
};