function minSubsequence(nums: number[]): number[] {
    nums.sort((a, b) => b - a);

    const totalSum = nums.reduce((acc, cur) => acc + cur, 0);

    const result: number[] = [];
    let sum: number = 0;

    for (const num of nums) {
        sum += num;
        result.push(num);

        if (sum > totalSum - sum) {
            break;
        }
    }

    return result;
}