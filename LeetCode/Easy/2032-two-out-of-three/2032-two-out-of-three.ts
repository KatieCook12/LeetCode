function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {

    const nums1Set: Set<number> = new Set(nums1);
    const nums2Set: Set<number> = new Set(nums2);
    const nums3Set: Set<number> = new Set(nums3);

    const count = new Map<number, number>();

    function countSet(set: Set<number>): void {
        set.forEach((ele: number) => {
            count[ele] = (count[ele] ?? 0) + 1;
        });
    }

    countSet(nums1Set);
    countSet(nums2Set);
    countSet(nums3Set);

    const result: number[] = [];

    for (const key in count) {
        if (count[key] >= 2) {
            result.push(Number(key));
        }
    }

    return result;
};