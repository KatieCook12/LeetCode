function sumOfSquares(nums: number[]): number {

    const n: number = nums.length;
    let sumOfSquares: number = 0;

    for (let i = 0; i < n + 1; i++) {
        if (n % i === 0) {
            sumOfSquares += Math.pow(nums[i - 1], 2);
        }
    }

    return sumOfSquares;
};