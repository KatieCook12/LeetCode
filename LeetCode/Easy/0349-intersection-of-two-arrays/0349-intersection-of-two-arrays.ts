function intersection(nums1: number[], nums2: number[]): number[] {

    const intersectionOfArrays: number[] = [];

    const numsOneSet = new Set(nums1);


    for (const n of numsOneSet) {
        if (nums2.includes(n)) {
            intersectionOfArrays.push(n);
        }
    }

    return intersectionOfArrays;

};