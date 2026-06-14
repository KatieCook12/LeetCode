function minSubsequence(nums: number[]): number[] {

    nums.sort((a, b) => b - a)

    const totalSum: number = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const minSubsequence: number[] = [];

    let sum: number = 0;

    for (let i = 0; i < nums.length; i ++ ){
        if (sum <= totalSum - sum){
            sum += nums[i];
            minSubsequence.push(nums[i])
        }
        else {
            break;
        }
    }

    return minSubsequence;
};