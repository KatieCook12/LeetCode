function checkPrimeFrequency(nums: number[]): boolean {
    const freq: number[] = new Array(101).fill(0);

    for (const num of nums) {
        freq[num]++;
    }

    const isPrime: boolean[] = new Array(101).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i * i <= 100; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= 100; j += i) {
                isPrime[j] = false;
            }
        }
    }

    for (const count of freq) {
        if (isPrime[count]) return true;
    }

    return false;
}
