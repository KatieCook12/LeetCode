function hasSameDigits(s: string): boolean {

    let sNumber: number[] = s.split("").map(Number);

    while (sNumber.length > 1) {

        let currentNumber: number[] = [];

        for (let i = 0; i < sNumber.length - 1; i++) {
            currentNumber.push((sNumber[i] + sNumber[i + 1]) % 10)

            if (sNumber.length == 2) {

                return sNumber[i] == sNumber[i + 1] ? true : false;

            }
        }

        sNumber = currentNumber;
        currentNumber = [];

    }

};