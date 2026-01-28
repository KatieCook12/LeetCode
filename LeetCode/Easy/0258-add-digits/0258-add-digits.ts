function addDigits(num: number): number {

    while (num.toString().length != 1) {

        let currentNumber: number = 0;

        for (const n of num.toString()) {
            currentNumber += Number(n);
        }

        num = currentNumber;

    }

    return num;

};