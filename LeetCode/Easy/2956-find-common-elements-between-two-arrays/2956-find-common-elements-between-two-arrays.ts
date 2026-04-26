function findIntersectionValues(nums1: number[], nums2: number[]): number[] {

    const commonElements: number[] = [0, 0];

    function numberOfElements(numberArrayOne: number[], numberArrayTwo: number[], index: number): void {
        for (const item of numberArrayOne) {
            if (numberArrayTwo.includes(item)) {
                commonElements[index]++;
            }
        }
    }

    numberOfElements(nums1, nums2, 0);

    numberOfElements(nums2, nums1, 1);

    return commonElements;
};