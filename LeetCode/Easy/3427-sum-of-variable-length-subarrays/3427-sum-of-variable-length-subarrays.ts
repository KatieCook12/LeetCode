function subarraySum(nums: number[]): number {

    let sum: number = 0;
    const numsLength: number = nums.length;

    for (let i = 0; i < numsLength; i++) {
        let start: number = Math.max(0, i - nums[i]);
        for (let x = start; x <= i; x++) {
            sum += nums[x]
        }
    }

    return sum;
};