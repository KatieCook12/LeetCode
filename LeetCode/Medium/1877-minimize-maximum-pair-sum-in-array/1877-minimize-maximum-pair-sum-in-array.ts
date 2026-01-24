function minPairSum(nums: number[]): number {

    nums.sort((a, b) => a - b);
    let left: number = 0;
    let right: number = nums.length - 1;
    let maxPairSum: number = -Infinity;

    while (left < right) {
        const pairSum = nums[left] + nums[right];
        if (pairSum > maxPairSum) {
            maxPairSum = pairSum;
        }
        left++;
        right--;
    }

    return maxPairSum;
}
