function splitNum(num: number): number {

    const numSorted: number[] = num.toString().split("").map(Number).sort((a, b) => a - b);

    const numOne: number[] = [];
    const numTwo: number[] = [];

    for (let i = 0; i < numSorted.length; i++) {
        if (i % 2 != 0) {
            numOne.push(numSorted[i]);
        } else {
            numTwo.push(numSorted[i]);
        }
    }

    return Number(numTwo.join("")) + Number(numOne.join(""))

};