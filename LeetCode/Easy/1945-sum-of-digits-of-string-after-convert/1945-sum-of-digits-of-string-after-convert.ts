function getLucky(s: string, k: number): number {

    let value: number = 0;

    for (const ch of s) {
        const n = ch.charCodeAt(0) - 96;
        value += Math.floor(n / 10) + (n % 10);
    }

    while (--k > 0) {
        let next: number = 0;
        while (value > 0) {
            next += value % 10;
            value = Math.floor(value / 10);
        }
        value = next;
    }

    return value;
}