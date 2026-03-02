function removeTrailingZeros(num: string): string {

    const numArray: string[] = num.split("");
    const numArrayLength: number = numArray.length - 1;
    let index: number = 0;

    for (let i = numArrayLength; i >= 0; i--) {
        if (numArray[i] != "0") {
            index = i + 1;
            break;
        }
    }

    return numArray.slice(0, index).join("");
};