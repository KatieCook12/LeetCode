function evenOddBit(n: number): number[] {

    const binaryToArray: string[] = n.toString(2).split("").reverse();

    let oddCount: number = 0;
    let evenCount: number = 0;

    for (let i = 0; i < binaryToArray.length; i++) {
        if (binaryToArray[i] === "1") {
            i % 2 === 0 ? evenCount++ : oddCount++;
        }
    };

    return [evenCount, oddCount];
}
