function minOperations(nums: number[], k: number): number {

    let sum: number = 0;

    for (const n of nums){
        sum += n;
    }

    return sum % k;
    
};