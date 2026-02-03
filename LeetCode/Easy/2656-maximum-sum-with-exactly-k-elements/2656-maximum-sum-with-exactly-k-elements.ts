function maximizeSum(nums: number[], k: number): number {

    nums.sort((a,b) => a - b)

    let currentNum: number = nums[nums.length - 1]
    let count: number = 0;

    for (let i=1; i <= k; i++){
        count += currentNum;
        currentNum ++;
    }

    return count;

};