function countPartitions(nums: number[]): number {

    let totalSum: number = 0;

    for (const num of nums) {
        totalSum += num;
    }

    return totalSum % 2 === 0 ? nums.length - 1 : 0;
    
};