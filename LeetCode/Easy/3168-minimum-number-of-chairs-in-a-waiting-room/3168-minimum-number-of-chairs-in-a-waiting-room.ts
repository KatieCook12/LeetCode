function minimumChairs(s: string): number {

    let maxCount: number = 0;
    let count: number = 0;

    for (const n of s) {

        if (n === "E") {
            count++;
            if (count > maxCount) maxCount = count;
        }

        else {
            count--;
        }

    }

    return maxCount;

};