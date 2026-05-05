function maximumCount(nums: number[]): number {

    let countPositive: number = 0;
    let countNegative: number = 0;

    for (const num of nums) {
        if (num != 0) {
            num > 0 ? countPositive++ : countNegative++;
        }
    }

    return Math.max(countPositive, countNegative);
};
