function largestGoodInteger(num: string): string {

    const numberArray: string[] = ["999", "888", "777", "666", "555", "444", "333", "222", "111", "000"];
    const numberArrayLength: number = numberArray.length;

    for (let i = 0; i < numberArrayLength; i++) {

        if (num.includes(numberArray[i])) {
            return numberArray[i];
        }

    }

    return "";

};