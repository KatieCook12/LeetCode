function secondHighest(s: string): number {
    let max: number = -1;
    let second: number = -1;

    for (const ch of s) {
        if (ch >= '0' && ch <= '9') {
            const digit = ch.charCodeAt(0) - 48;

            if (digit > max) {
                second = max;
                max = digit;
            } else if (digit < max && digit > second) {
                second = digit;
            }
        }
    }

    return second;
}