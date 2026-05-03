function maxProduct(nums: number[]): number {

    let maximumProduct: number = 1;

    const sorted =
        nums.sort((a, b) => a - b)
            .slice(nums.length - 2, nums.length)
            .forEach(num => maximumProduct *= num - 1);

    return maximumProduct;
};