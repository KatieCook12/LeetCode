function maximumOddBinaryNumber(s: string): string {

    const sLength: number = s.length;
    const sArray: number[] = new Array(sLength).fill(0);
    let numberOfOnes: number = s.replace(/0/g, "").length;

    if (numberOfOnes > 0) {
        sArray[sLength - 1] = 1;
        numberOfOnes--;
    }

    for (let i = 0; i < numberOfOnes; i++) {
        sArray[i] = 1;
    }

    return sArray.join("");
};