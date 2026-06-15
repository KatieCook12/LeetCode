function minimumOperations(nums: number[]): number {
    const uniquePositive = new Set(
        nums.filter(num => num > 0)
    );

    return uniquePositive.size;
}