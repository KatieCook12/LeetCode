function checkPrimeFrequency(nums: number[]): boolean {

    const freq: Map<number, number> = new Map();

    for (const num of nums) {
        freq.set(num, (freq.get(num) ?? 0) + 1);
    }

    const isPrime = (n: number): boolean => {
        if (n < 2) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    };

    for (const count of freq.values()) {
        if (isPrime(count)) return true;
    }

    return false;
}
