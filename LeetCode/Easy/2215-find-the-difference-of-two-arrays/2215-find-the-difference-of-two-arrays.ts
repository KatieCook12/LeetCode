function findDifference(nums1: number[], nums2: number[]): number[][] {

    const differenceNumsOneCheck: number[] = [];
    const differenceNumsTwoCheck: number[] = [];

    for (const num of nums1) {
        if (!nums2.includes(num) && !differenceNumsOneCheck.includes(num)) {
            differenceNumsOneCheck.push(num);
        }
    }

    for (const num of nums2) {
        if (!nums1.includes(num) && !differenceNumsTwoCheck.includes(num)) {
            differenceNumsTwoCheck.push(num);
        }
    }

    return [differenceNumsOneCheck, differenceNumsTwoCheck]


};