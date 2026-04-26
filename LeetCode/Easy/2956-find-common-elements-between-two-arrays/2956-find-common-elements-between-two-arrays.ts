function findIntersectionValues(nums1: number[], nums2: number[]): number[] {

    const commonElements: number[] = [];

    let count: number = 0;

    for (const num of nums1) {
        if (nums2.includes(num)) {
            count++;
        }
    }

    commonElements.push(count);
    count = 0;

    for (const num of nums2) {
        if (nums1.includes(num)) {
            count++;
        }
    }

    commonElements.push(count);

    return commonElements;
};