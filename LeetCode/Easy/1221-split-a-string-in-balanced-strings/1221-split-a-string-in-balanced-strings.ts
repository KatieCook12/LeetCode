function balancedStringSplit(s: string): number {

    let balance: number = 0;
    let count: number = 0;

    for (const ch of s) {
        ch == "L" ? balance++ : balance--;
        if (balance == 0) {
            count++;
        }
    }

    return count;
};