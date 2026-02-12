function countAsterisks(s: string): number {
    let count = 0;
    let insideBars = false;

    for (const ch of s) {

        if (ch === "|") {
            insideBars = !insideBars;

        } else if (!insideBars && ch === "*") {
            count++;
        }
        
    }

    return count;
}
