function minPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    let maxPairSum = nums[left] + nums[right];

    while (++left < --right) {
        const pairSum = nums[left] + nums[right];
        if (pairSum > maxPairSum) {
            maxPairSum = pairSum;
        }
    }

    return maxPairSum;
}
