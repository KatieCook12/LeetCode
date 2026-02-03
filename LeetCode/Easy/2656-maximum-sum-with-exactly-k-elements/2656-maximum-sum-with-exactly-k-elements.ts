function maximizeSum(nums: number[], k: number): number {

    let currentNum: number = Math.max(...nums)
    let count: number = 0;

    for (let i = 1; i <= k; i++) {
        count += currentNum;
        currentNum++;
    }

    return count;

};