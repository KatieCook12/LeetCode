function addDigits(num: number): number {
    let addedDigits: number = num;

    while (addedDigits >= 10) {
        let currentNumber: number = addedDigits;
        let sum: number = 0;

        while (currentNumber !== 0) {
            sum += currentNumber % 10;
            currentNumber = Math.floor(currentNumber / 10);
        }

        addedDigits = sum;
    }

    return addedDigits;
}