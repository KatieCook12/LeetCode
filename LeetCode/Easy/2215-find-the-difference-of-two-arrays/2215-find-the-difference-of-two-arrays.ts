function findDifference(nums1: number[], nums2: number[]): number[][] {

    return [
        [...new Set(nums1.filter(num => !nums2.includes(num)))],
        [...new Set(nums2.filter(num => !nums1.includes(num)))]
    ]

};