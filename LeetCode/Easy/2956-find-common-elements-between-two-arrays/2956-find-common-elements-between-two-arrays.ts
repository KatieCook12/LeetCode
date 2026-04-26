function findIntersectionValues(nums1: number[], nums2: number[]): number[] {

    const commonElements: number[] = [];

    let count: number = 0;

    function numberOfElements(numberArrayOne: number[], numberArrayTwo: number[]): void {
        for (const item of numberArrayOne) {
            if (numberArrayTwo.includes(item)) {
                count++;
            }
        }
    }

    numberOfElements(nums1, nums2);

    commonElements.push(count);
    
    count = 0;

    numberOfElements(nums2, nums1);

    commonElements.push(count);

    return commonElements;
};