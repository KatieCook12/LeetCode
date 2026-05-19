function divideArray(nums: number[]): boolean {

    let seen: Record<number, boolean> = {};

    for (const num of nums) {
        seen[num] = !seen[num];
    }

    return Object.values(seen).every(v => v === false);
}