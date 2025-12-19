function absDifference(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);

    const largestNumbers: number[] = nums.slice(nums.length - k);
    const smallestNumbers: number[] = nums.slice(0, k);

    let largestNumbersSum: number = 0;
    let smallestNumbersSum: number = 0;

    largestNumbers.forEach((num) => (largestNumbersSum += num));
    smallestNumbers.forEach((num) => (smallestNumbersSum += num));

    return largestNumbersSum - smallestNumbersSum;
}
