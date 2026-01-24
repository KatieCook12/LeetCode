function minPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b);

    let left: number = 0;
    let right: number = nums.length - 1;
    let maxPairSum: number = nums[left] + nums[right];

    while (++left < --right) {
        const pairSum = nums[left] + nums[right];
        if (pairSum > maxPairSum) {
            maxPairSum = pairSum;
        }
    }

    return maxPairSum;
}
