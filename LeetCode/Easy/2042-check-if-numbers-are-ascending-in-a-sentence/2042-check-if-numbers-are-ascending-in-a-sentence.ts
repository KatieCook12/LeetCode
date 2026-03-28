function areNumbersAscending(s: string): boolean {

    const numbersArray = (s.match(/\d+/g) || []).map(Number);
    const numberArrayLength: number = numbersArray.length - 1;

    for (let i = 0; i < numberArrayLength; i++) {

        if (numbersArray[i] >= numbersArray[i + 1]) {
            return false;
        }
    }

    return true;
};