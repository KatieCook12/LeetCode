function isBalanced(num: string): boolean {

    let oddSum: number = 0;
    let evenSum: number = 0;
    const numLength: number = num.length;

    for (let i = 0; i < numLength; i++) {

        i % 2 != 0 ? oddSum += +num[i] : evenSum += +num[i];

    }

    return oddSum == evenSum ? true : false;
};