function findDifference(nums1: number[], nums2: number[]): number[][] {

    const differenceNumsOne = [...new Set(nums1.filter(num => !nums2.includes(num)))];
    const differenceNumsTwo = [...new Set(nums2.filter(num => !nums1.includes(num)))];

    return [differenceNumsOne, differenceNumsTwo]
};