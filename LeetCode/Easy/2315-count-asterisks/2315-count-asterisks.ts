function countAsterisks(s: string): number {

    let count: number = 0;
    let verticalBarCount: number = 0;

    for (const ch of s) {

        if (ch === "|") {
            verticalBarCount === 0 ? verticalBarCount++ : verticalBarCount = 0;
        }

        if (verticalBarCount === 0 && ch === "*") {
            count++;
        }
        
    }

    return count;
};