function duplicateNumbersXOR(nums: number[]): number {

    let seen: Record<string, boolean> = {};
    const duplicateNumbers: number[] = [];

    for (const n of nums) {
        seen[n] = !(seen[n] ?? true);
    }

    Object.entries(seen).forEach(([key, value]) => {
        if (value === true) {
            duplicateNumbers.push(+key);
        }
    });

    let XORNumber: number = 0;

    duplicateNumbers.forEach(num => XORNumber ^= num);

    return XORNumber;


}