function findMaxK(nums: number[]): number {

    const seen = new Set(nums);
    const pairs: number[] = [];

    for (const num of seen) {
        if (num > 0 && seen.has(-num)) {
            pairs.push(num);
        }
    }

    if (pairs.length === 0){
        return -1;
    }
    else {
        return Math.max(...pairs);
    }


};