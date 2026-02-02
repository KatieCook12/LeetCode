function findNumbers(nums: number[]): number {

    let count: number = 0;

    for (const n of nums) {
        if ((Math.floor(Math.log10(Math.abs(n))) + 1) % 2 === 0) {
            count++;
        }
    }

    return count;

};