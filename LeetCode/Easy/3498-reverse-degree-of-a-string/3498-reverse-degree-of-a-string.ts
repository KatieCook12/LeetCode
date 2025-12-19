function reverseDegree(s: string): number {

    const sArray: string[] = s.split("");
    const arrayLength: number = sArray.length;
    let output: number = 0;

    for (let i = 0; i < arrayLength; i++) {
        output += (26 - (sArray[i].charCodeAt(0) - 'a'.charCodeAt(0))) * (i + 1);
    }

    return output;

};