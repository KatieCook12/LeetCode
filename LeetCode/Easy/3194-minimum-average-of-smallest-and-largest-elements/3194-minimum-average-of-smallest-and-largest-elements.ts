function minimumAverage(nums: number[]): number {

    nums.sort((a, b) => a - b);
    let left: number = 0;
    let right: number = nums.length - 1;
    let minimumAverage: number = Infinity;

    while (left < right) {
        const average: number = (nums[left] + nums[right]) / 2;
        if (average < minimumAverage) {
            minimumAverage = average;
        }
        left++;
        right--;

    }

    return minimumAverage;
};