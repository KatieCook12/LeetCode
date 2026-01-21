function checkPrimeFrequency(nums: number[]): boolean {

    function isPrime(n: number): boolean {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;

        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) {
                return false;
            }
        }
        return true;
    }

    const count: Record<number, number> = {};
    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    for (const freq of Object.values(count)) {
        if (freq > 1 && isPrime(freq)) {
            return true;
        }
    }

    return false;
}
