function increasingTriplet(nums: number[]): boolean {

    let firstSmallestNumber: number = Infinity;
    let secondSmallestNumber: number = Infinity;

    for (const n of nums) {
        if (n <= firstSmallestNumber) {
            firstSmallestNumber = n;
        } else if (n <= secondSmallestNumber) {
            secondSmallestNumber = n;
        } else {
            return true;
        }
    }
    
    return false;

};