function findLHS(nums: number[]): number {

    nums.sort((a, b) => a - b)

    let count: Record<string, number> = {};
    let longestHarmoniousSequence: number = 0;

    for (const num of nums) {
        count[num] = (count[num] || 0) + 1
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + 1 === nums[j]) {
                const countSum: number = count[nums[i]] + count[nums[j]];
                if (countSum > longestHarmoniousSequence) {
                    longestHarmoniousSequence = countSum;
                }
            }
        }
    }

    return longestHarmoniousSequence;
};