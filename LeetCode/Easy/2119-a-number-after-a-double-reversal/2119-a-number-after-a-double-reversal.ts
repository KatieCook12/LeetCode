function isSameAfterReversals(num: number): boolean {

    let removedZeros: number = num;

    while (removedZeros % 10 === 0 && removedZeros !== 0) {
        removedZeros /= 10;
    }

    return removedZeros == num ? true : false;
};